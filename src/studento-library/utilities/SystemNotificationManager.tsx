import { useState, useEffect, FC, useRef } from "react";
import styled from "styled-components";
import SystemNotification, { NotificationType } from "./SystemNotification";

const StyledManager = styled.div`
    position: absolute;
    z-index: 9999;
    top: 20px;
    left: 50%;
    translate: -50% 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 8px;
    padding: 20px;
    width: fit-content;
    height: fit-content;
    transition: translate 1s ease-in-out;
`;

export interface INotificationEntry {
    text: string;
    type: NotificationType;
}

interface IDisplayedNotification {
    key: string;
    entry: INotificationEntry;
}

interface IManagerProps {
    newEntry: INotificationEntry | null;
}

const maxNotificationsAtOnce = 4;

const SystemNotificationManager:FC<IManagerProps> = (props) => {
    const { newEntry } = props;
    const keyCountRef = useRef<number>(0);
    const displayedCountRef = useRef<number>(0);
    const queueRef = useRef<Array<INotificationEntry>>([]);
    const [displayed, setDisplayed] = useState<Array<IDisplayedNotification>>([]);

    useEffect(() => {
        if (newEntry) {
            if (displayedCountRef.current >= maxNotificationsAtOnce) {
                queueRef.current.push(newEntry);
            }else{
                keyCountRef.current = keyCountRef.current + 1;
                displayedCountRef.current = displayedCountRef.current + 1;
                setDisplayed(d => [...d, {key: `${keyCountRef.current}`, entry: newEntry}]);
            }
        }else{
            queueRef.current = [];
            setDisplayed([]);
        }
    }, [newEntry]);

    useEffect(() => {
        const poppedNotifications:Array<INotificationEntry> = [];
        const newlyDisplayed:Array<IDisplayedNotification> = [];
        for (let i = 0; i < maxNotificationsAtOnce - displayedCountRef.current; i++) {
            if (queueRef.current[i]) {
                keyCountRef.current = keyCountRef.current + 1;
                displayedCountRef.current = displayedCountRef.current + 1;
                newlyDisplayed.push({key: `${keyCountRef.current}`, entry: queueRef.current[i]});
                poppedNotifications.push(queueRef.current[i]);
            } 
        }
        if (newlyDisplayed.length > 0) setDisplayed([...displayed, ...newlyDisplayed]);
        queueRef.current = queueRef.current.filter(e => !poppedNotifications.includes(e));
    }, [displayed]);

    const removeNotification = (key: string) => {
        displayedCountRef.current = displayedCountRef.current - 1;
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