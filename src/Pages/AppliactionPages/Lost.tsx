import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Lost = () => {
    const nav = useNavigate()
    useEffect(() => {
        return () => {
            nav("/app/thread")
        }
    },[])
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"500", fontFamily:"system-ui"}}>
            <h1>Chargement...</h1>
        </div>
    );
};

export default Lost;