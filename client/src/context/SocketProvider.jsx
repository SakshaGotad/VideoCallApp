const { createContext } = require("react");
import{io} from 'socket.io-client';
const SocketContext = createContext(null);

export const  SocketProvider = (props)=>{
    return (
        <SocketContext.Provider value={}>
            {props.children}
        </SocketContext.Provider>
    )
}