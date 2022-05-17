import { useEffect, useState } from "react";

import { GlobalContext } from "./Globalcontext";

export const GlobalState = (props) => {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    

    const value = {
        token, setToken,
        name, setName,
        email,setEmail,
        loader, setLoader
    }

    useEffect(()=>{
        if(sessionStorage.getItem('token')!==''){
            setToken(sessionStorage.getItem('token'))
            setName(sessionStorage.getItem('name'))
            setEmail(sessionStorage.getItem('email'))
        }
    },[])

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )

}