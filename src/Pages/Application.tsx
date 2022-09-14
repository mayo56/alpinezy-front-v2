import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Thread from './AppliactionPages/Thread';
import { io } from 'socket.io-client';

const socket = io("http://192.168.1.27:3000");

const Application = () => {
    const nav = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            nav("/signin");
        };
        return () => {
            socket.on("connect", () => {
                socket.emit("user_connexion", ({token:localStorage.getItem("token")}))
            })
        };
    },[])

    return (
        <Routes>
            <Route path='thread' element={<Thread />} />
        </Routes>
    );
};

export default Application;