import React, { createContext, useMemo, useContext } from "react";
import{io} from 'socket.io-client';
const SocketContext = createContext(null);

export const  SocketProvider = (props)=>{

     const socket = useMemo(()=>{
        return io('localhost:8001',[]);
     })
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

export const useSocket =()=>{
    const socket = useContext(SocketContext);
    return socket;
}