import React from 'react';
import "../CSS/SignIn.css"
import WindowLogin from '../Components/WindowLogin';

const Signin = () => {
    return (
        <div className='signinBox'>
            <WindowLogin login='signin' />
        </div>
    );
};

export default Signin;