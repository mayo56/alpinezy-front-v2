import React from 'react';
import { Socket } from 'socket.io-client';

const Thread = (props:{socket:Socket | null}) => {
    return (
        <div>
            <p>Thread</p>
        </div>
    );
};

export default Thread;