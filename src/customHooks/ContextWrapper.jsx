import React from 'react'
import { useEffect, useState } from "react";
import { Context } from '../MyContext'

const ContextWrapper = ({ children }) => {
    const [chatNameData, setchatNameData] = useState()
    const [chatMessegeData, setchatMessegeData] = useState()
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
                setchatMessegeData(Data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((Data) => {
                let filteredData = Data.data.data.filter(chat => chat.creator.name !== null && chat.creator.name !== undefined).filter((chat, index, self) =>
                    index === self.findIndex(t => (
                        t.creator.name === chat.creator.name
                    ))
                );
                setchatNameData(filteredData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const filtered = chatNameData && chatNameData.filter(chat =>
            chat.creator.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filtered)
        setchatNameData(filtered)
    }, [query])


    return (
        <>
            <Context.Provider value={{
                chatNameData, dark, setdark, fetchchat,
                query, setquery, chatMessegeData, loading
            }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextWrapper