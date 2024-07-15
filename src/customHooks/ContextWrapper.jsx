import React from 'react'
import { useEffect, useState } from "react";
import { Context } from '../MyContext'

const ContextWrapper = ({ children }) => {
    const [chatdata, setchatdata] = useState()
    const [chatNamedata, setchatNamedata] = useState()
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
                    const senderName = message.sender.name;
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
                setchatNamedata(Object.keys(groupedMessages))
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchchat()
    }, []);

    // useEffect(() => {

    //     const Data2 = data

    //     data && delete Object.assign(Data2, {["NULL"]: Data2[null] })[null];

    //     const filteredData = Object.keys(Data2).reduce((filtered, key) => {
    //         if (Data2[key].toString().toLowerCase().includes(query.toLowerCase())) {
    //             filtered[key] = data[key];
    //         }
    //         return filtered;
    //     }, {});
    //     console.log(filteredData)

    //     setchatdata(Data2);
    // }, [query, data])


    // console.log(chatdata)


    return (
        <>
            <Context.Provider value={{
                dark, setdark, fetchchat,
                query, setquery, chatdata, loading,
                chatNamedata, setchatNamedata
            }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextWrapper