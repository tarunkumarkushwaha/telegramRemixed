import React from 'react'
import { useEffect, useState } from "react";
import { Context } from '../MyContext'

const ContextWrapper = ({ children }) => {
    const [data, setdata] = useState()
    const [dark, setdark] = useState(false)
    const [query, setquery] = useState("")

    const fetchdata = async () => {

    }

    return (
        <>
            <Context.Provider value={{
                data, dark, setdark, fetchdata,
                query, setquery
            }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextWrapper