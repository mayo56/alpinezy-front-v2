import React, { useEffect, useState } from 'react';
import "../../CSS/Thread.css";
import { Socket } from 'socket.io-client';
import LeftBar from '../../Components/LeftBar';
import { UserMe } from '../../types/allTypes';

const Thread = (props: { socket: Socket }) => {

    const [user, setUser] = useState<UserMe>()

    useEffect(() => {
        const test = () => {
            console.log("heyy")
        }
        return () => {
            props.socket.emit("getInfoUserMe")
            props.socket.on("resInfoUserMe", (args) => {
                console.log(args)
                setUser(args)
            })
            props.socket.on("Hello traveller", test)
        }
    }, []);


    return (
        <div className='threadTab'>
            <LeftBar user={user} />
            <p>Application</p>
        </div>
    );
};

export default Thread;