import React from 'react';
import WindowLogin from '../Components/WindowLogin';
import "../CSS/SignUp.css"

const Signup = () => {
    return (
        <div className='signupBox'>
            <WindowLogin login='signup' />
        </div>
    );
};

export default Signup;