import { useState, useEffect, FC, useRef } from "react";
import styled from "styled-components";
import SystemNotification, { NotificationType } from "../utilities/SystemNotification";

const StyledManager = styled.div`
    position: absolute;
    z-index: 9999;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 8px;
    padding: 20px;
    width: fit-content;
    height: fit-content;
    transition: translate 1s ease-in-out;
`;

export interface INotification {
    text: string;
    type: NotificationType;
}

export interface INewEntry {
    notification: INotification;
    isClearBefore: boolean;
}

interface IDisplayedNotification {
    key: string;
    entry: INotification;
}

interface IManagerProps {
    newEntry: INewEntry | null;
    isClearBefore?: boolean;
}

const maxNotificationsAtOnce = 4;

const SystemNotificationManager:FC<IManagerProps> = (props) => {
    const { newEntry } = props;
    const keyCountRef = useRef<number>(0);
    const displayedCountRef = useRef<number>(0);
    const queueRef = useRef<Array<INotification>>([]);
    const [displayed, setDisplayed] = useState<Array<IDisplayedNotification>>([]);

    useEffect(() => {
        if (newEntry) {
            if (newEntry.isClearBefore) {
                queueRef.current = [];
                keyCountRef.current = keyCountRef.current + 1;
                setDisplayed([{key: `${keyCountRef.current}`, entry: newEntry.notification}]);
            }else if (displayedCountRef.current >= maxNotificationsAtOnce) {
                queueRef.current.push(newEntry.notification);
            }else{
                keyCountRef.current = keyCountRef.current + 1;
                setDisplayed(d => [...d, {key: `${keyCountRef.current}`, entry: newEntry.notification}]);
            }
        }else{
            queueRef.current = [];
            keyCountRef.current = 0;
            setDisplayed([]);
        }
    }, [newEntry]);

    useEffect(() => {
        displayedCountRef.current = displayed.length;
        const poppedNotifications:Array<INotification> = [];
        const newlyDisplayed:Array<IDisplayedNotification> = [];
        for (let i = 0; i < maxNotificationsAtOnce - displayedCountRef.current; i++) {
            if (queueRef.current[i]) {
                keyCountRef.current = keyCountRef.current + 1;
                newlyDisplayed.push({key: `${keyCountRef.current}`, entry: queueRef.current[i]});
                poppedNotifications.push(queueRef.current[i]);
            } 
        }
        if (newlyDisplayed.length > 0) setDisplayed([...displayed, ...newlyDisplayed]);
        queueRef.current = queueRef.current.filter(e => !poppedNotifications.includes(e));
    }, [displayed]);

    const removeNotification = (key: string) => {
        setDisplayed(d => d.filter(n => n.key !== key));
    };

    return (
        <StyledManager>
            {displayed.map((n, i) => {
                return <SystemNotification key={n.key} type={n.entry.type} isFading={false} removeCallback={() => removeNotification(n.key)}>{n.entry.text}</SystemNotification>;
            })}
        </StyledManager>
    )
}

export default SystemNotificationManager;