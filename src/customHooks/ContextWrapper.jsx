import React, { useEffect, useState } from 'react';
import { Context } from '../MyContext';

const ContextWrapper = ({ children }) => {
    const [chatdata, setchatdata] = useState(null);
    const [currentChat, setcurrentChat] = useState(null);
    const [data, setdata] = useState(null);
    const [dark, setdark] = useState(false);
    const [query, setquery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dummydata = [
        {
            message: "Hello, how are you?",
            sender: { name: "Alice" },
            created_at: "2025-01-25T12:30:00Z",
        },
        {
            message: "I'm doing great, thanks!",
            sender: { name: "Bob" },
            created_at: "2025-01-25T12:31:00Z",
        },
        {
            message: "What about you?",
            sender: { name: "Bob" },
            created_at: "2025-01-25T12:32:00Z",
        },
        {
            message: "I'm good too!",
            sender: { name: "Alice" },
            created_at: "2025-01-25T12:33:00Z",
        },
        {
            message: "Let's meet later.",
            sender: { name: "Alice" },
            created_at: "2025-01-25T12:34:00Z",
        },
    ];

    const fetchChat = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/api/get_chat_messages?chat_id=3888');
            if (!response.ok) {
                throw new Error('Failed to fetch chat data');
            }
            const Data = await response.json();

            // Group messages by sender
            const groupedMessages = Data.data

            // Sort messages for each sender
            for (const senderName in groupedMessages) {
                groupedMessages[senderName].sort(
                    (a, b) => new Date(a.created_at) - new Date(b.created_at)
                );
            }

            // console.log(groupedMessages,"api data")

            setdata(groupedMessages);
            setchatdata(groupedMessages);
        } catch (err) {
            setdata({ tarun: dummydata });
            setchatdata({ tarun: dummydata });
            console.log("updated with dummy data due to unavailability of api")
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchChat();
    }, []);

    useEffect(() => {
        if (data) {
            const filteredData = Object.keys(data).reduce((acc, key) => {
                if (key.toLowerCase().includes(query.toLowerCase())) {
                    acc[key] = data[key];
                }
                return acc;
            }, {});
            setchatdata(filteredData);
        } else {
            setchatdata(data);
        }
    }, [query, data]);

    return (
        <Context.Provider
            value={{
                dark,
                setdark,
                fetchChat,
                query,
                setquery,
                chatdata,
                loading,
                currentChat,
                setcurrentChat,
                error,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextWrapper;