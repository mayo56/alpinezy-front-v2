import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import LeftBar from '../../Components/LeftBar';
import { UserMe } from '../../types/allTypes';
import Thread from './Thread';
import "../../CSS/MainApp.css"
import Lost from './Lost';

const MainApp = (props: { socket: Socket }) => {

    const [user, setUser] = useState<UserMe>()

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            return () => {
                props.socket.emit("getInfoUserMe")
                props.socket.on("resInfoUserMe", (args: UserMe) => {
                    setUser(args)
                    localStorage.setItem("user", `${JSON.stringify(args)}`)
                    console.warn("CONNEXION :: User Load")
                })
            }
        } else {
            return () => {
                const userLocal = JSON.parse(localStorage.getItem("user")!)
                setUser(userLocal);
                console.warn("CONNEXION :: User Load")
            }
        }
    }, []);

    return (
        <div className='AppTab'>
            <LeftBar user={user} />
            <Routes>
                <Route path='thread' element={<Thread socket={props.socket} />} />

                {/* Route pour l'utilisateur (profile, succès, compétences, add Amis/Server) */}
                <Route path='me'>
                    <Route path='friends' />
                    <Route path='servers' />

                    <Route path='profile' />
                    <Route path='reward' />
                    <Route path='skills' />
                </Route>

                <Route path='*' element={<Lost />} />
            </Routes>

        </div>
    );
};

export default MainApp;