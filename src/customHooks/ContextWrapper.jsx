import React from 'react'
import { useEffect, useState } from "react";
import { Context } from '../MyContext'

const ContextWrapper = ({ children }) => {
    const [chatdata, setchatdata] = useState()
    const [currentChat, setcurrentChat] = useState()
    const [data, setdata] = useState()
    const [dark, setdark] = useState(false)
    const [query, setquery] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchchat = () => {
        fetch('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((Data) => {
                const groupedMessages = Data.data.reduce((acc, message) => {
                    const senderName = message.sender.name || "Unsaved";
                    if (!acc[senderName]) {
                        acc[senderName] = [];
                    }
                    acc[senderName].push(message);
                    return acc;
                }, {});

                for (const senderName in groupedMessages) {
                    groupedMessages[senderName].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                }
                setchatdata(groupedMessages);
                setdata(groupedMessages)
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchchat()
    }, []);

    useEffect(() => {
        if (data) {
            let output = {}
            const filteredKeys = Object.keys(data).filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            filteredKeys.forEach((item) => {
                output[item] = data[item];
            })
            setchatdata(output);
        } else {
            setchatdata(data);
        }

    }, [query, data])

    return (
        <>
            <Context.Provider value={{
                dark, setdark, fetchchat,
                query, setquery, chatdata, loading,
                currentChat, setcurrentChat
            }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextWrapper