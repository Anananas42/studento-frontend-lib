import { useState, useEffect, FC } from "react";
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

const SystemNotificationManager:FC<IManagerProps> = (props) => {
    const { newEntry } = props;
    const maxNotificationsAtOnce = 4;
    const [keyCount, setKeyCount] = useState<number>(0);
    const [queue, setQueue] = useState<Array<INotificationEntry>>([])
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
            if (queue[i]) {
                displayNotification(queue[i]);
                poppedNotifications.push(queue[i]);
            } 
        }
        setQueue(queue => queue.filter(e => !poppedNotifications.includes(e)))
    }, [displayed]);

    const clearAll = () => {
        setQueue([]);
        setDisplayed([]);
    }

    const enqueueNotification = (entry: INotificationEntry) => {
        if (displayed && displayed.length >= maxNotificationsAtOnce) {
            setQueue([...queue, entry]);
        }else{
            displayNotification(entry);
        }
    }


    const displayNotification = (entry: INotificationEntry) => {
        setKeyCount(keyCount+1);
        setDisplayed([...displayed, {key: `${keyCount}`, entry}])
    }

    return (
        <StyledManager>
            {displayed.map((n, i) => {
                return <SystemNotification key={n.key} type={n.entry.type} isFading={false} removeCallback={() => setDisplayed(displayed => displayed.filter(d => d.key !== n.key))}>{n.entry.text}</SystemNotification>;
            })}
        </StyledManager>
    )
}

export default SystemNotificationManager;