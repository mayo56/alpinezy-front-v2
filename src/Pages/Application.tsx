import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import MainApp from './AppliactionPages/MainApp';


const Application = () => {
    const [socket, setSocket] = useState<Socket>()
    const nav = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            nav("/signin");
        }
        //WebSocket
        const newSocket = io("http://localhost:3000", { auth: { "token": localStorage.getItem("token") } })
        setSocket(newSocket)
        return () => {
            newSocket.close();
        }
    }, [setSocket])

    return (
        <Routes>
            {
                socket ?
                    (
                        <Route path='*' element={<MainApp socket={socket} />} />
                    ) : (
                        <></>
                    )
            }
        </Routes>
    );
};

export default Application;