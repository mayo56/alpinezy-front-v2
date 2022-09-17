import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Thread from './AppliactionPages/Thread';
import { io, Socket } from 'socket.io-client';


const Application = () => {
    const [socket, setSocket] = useState<Socket | null>(null)
    const nav = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            nav("/signin");
        }
        //WebSocket
        const newSocket = io("http://localhost:3000", {auth:{"token":"kfjdsf"}})
        setSocket(newSocket)
        return () => {
            newSocket.close();
        }
    },[setSocket])

    return (
        <Routes>
            <Route path='thread' element={<Thread socket={socket} />} />
        </Routes>
    );
};

export default Application;