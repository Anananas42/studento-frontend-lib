import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import SystemNotification, { NotificationType } from "./SystemNotification";

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
`;

export interface INotificationEntry {
    text: string;
    type: NotificationType;
}

interface IManagerProps {
    newEntry: INotificationEntry | null;
}

const SystemNotificationManager:FC<IManagerProps> = (props) => {
    const { newEntry } = props;
    const maxNotificationsAtOnce = 4;
    const [keyCount, setKeyCount] = useState<number>(0);
    const [queue, setQueue] = useState<Array<INotificationEntry>>([])
    const [displayed, setDisplayed] = useState<Array<INotificationEntry>>([]);

    useEffect(() => {
        if (newEntry) {
            enqueueNotification(newEntry);
        }else{
            clearAll();
        }
    }, [newEntry]);

    useEffect(() => {
        for (let i = 0; i < maxNotificationsAtOnce - displayed.length; i++) {
            queue[i] && displayNotification(queue[i]);
        }
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
        console.log("enqueing")
    }


    const displayNotification = (entry: INotificationEntry) => {
        setKeyCount(keyCount+1);
        setDisplayed([...displayed, entry])
    }

    return (
        <StyledManager>
            {displayed.map((n, i) => {
                return <SystemNotification key={i} type={n.type} isFading={false}>{n.text}</SystemNotification>;
            })}
        </StyledManager>
    )
}

export default SystemNotificationManager;