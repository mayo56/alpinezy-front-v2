import React, { useEffect, useState } from 'react';
import "../../CSS/Thread.css";
import { Socket } from 'socket.io-client';
import LeftBar from '../../Components/LeftBar';
import { UserMe } from '../../types/allTypes';

const Thread = (props: { socket: Socket }) => {

    const [post, setPost] = useState([{ post_name: "Bébé mort" }])


    return (
        <div className='threadApp'>
            <div>
                {
                    post.map((e, index) => {
                        return (
                            <div className='threadPost' key={index}>
                                <div className='threadPostUser'>
                                    <img src="https://cdna.artstation.com/p/assets/covers/images/031/167/572/large/art-of-milee-art-of-milee-art-of-milee-genshin-impact-paimon-icon.jpg?1602789607" alt="dsqdqs" />
                                    <div className='intoThreadPostUser'>
                                        <div style={{ display: "flex", alignItems: "baseline" }}>
                                            <p className='username'>Mayo</p>
                                            <p className='user_code'>#0001</p>
                                        </div>
                                        <div className='listeBadges'>
                                            <svg viewBox='0 0 100 100' style={{ width: "15px", paddingTop: "5px", paddingRight: "5px" }}>
                                                <path d='M0 0 L100 100 M0 100 L100 0' stroke='red' strokeWidth={10} />
                                            </svg>
                                            <svg viewBox='0 0 100 100' style={{ width: "15px", paddingTop: "5px", paddingRight: "5px" }}>
                                                <path d='M0 0 L100 100 M0 100 L100 0' stroke='red' strokeWidth={10} />
                                            </svg>

                                        </div>
                                    </div>

                                </div>
                                <div className='threadPostContent'>
                                    <p id='threadPostTitle'>Objet</p>
                                    <p id='threadPost_ContentText'>dkjqhdjhdhjksqhdjkhsqkjdhjkqshdjhsqjdhjqskhdjqshdjhsqjhdjsqhdjhqsjdhjksqhdjkqshdjkhsqjdhjk</p>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Thread;