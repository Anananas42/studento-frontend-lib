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
    const queueRef = useRef<Array<INotificationEntry>>([]);
    const [displayed, setDisplayed] = useState<Array<IDisplayedNotification>>([]);

    useEffect(() => {
        if (newEntry) {
            enqueueNotification(newEntry);
        }else{
            clearAll();
        }
    }, [newEntry]);

    useEffect(() => {
        const poppedNotifications:Array<INotificationEntry> = [];
        for (let i = 0; i < maxNotificationsAtOnce - displayed.length; i++) {
            if (queueRef.current[i]) {
                displayNotification(queueRef.current[i]);
                poppedNotifications.push(queueRef.current[i]);
            } 
        }
        queueRef.current = queueRef.current.filter(e => !poppedNotifications.includes(e));
    }, [displayed]);

    const clearAll = () => {
        queueRef.current = [];
        setDisplayed([]);
    }

    const enqueueNotification = (entry: INotificationEntry) => {
        if (displayed && displayed.length >= maxNotificationsAtOnce) {
            queueRef.current.push(entry);
        }else{
            displayNotification(entry);
        }
    }


    const displayNotification = (entry: INotificationEntry) => {
        keyCountRef.current = keyCountRef.current + 1;
        setDisplayed([...displayed, {key: `${keyCountRef.current}`, entry}])
    }

    return (
        <StyledManager>
            {displayed.map((n, i) => {
                return <SystemNotification key={n.key} type={n.entry.type} isFading={false} removeCallback={() => setDisplayed(displayed => displayed.filter(e => e.key !== n.key))}>{n.entry.text}</SystemNotification>;
            })}
        </StyledManager>
    )
}

export default SystemNotificationManager;