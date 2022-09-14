import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/WindowLogin.css";

const url = "http://192.168.1.27:3000"

const WindowLogin = (comp: { login: 'signin' | 'signup' }) => {
    //SignIn
    const [emailSI, setEmailSI] = useState<string>("");
    const [passwordSI, setPasswordSI] = useState<string>("");

    //SignUp
    const [username, setUsername] = useState<string>("");
    const [user_code, setUser_code] = useState<string>("");
    const [emailSU, setEmailSU] = useState<string>("");
    const [passwordSU, setPasswordSU] = useState<string>("");


    //Si token, skippé le login
    const nav = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) nav("/app/thread");
    }, []);

    //Fonction de connexion
    const SignIn = async () => {
        if (!emailSI || !passwordSI) return document.getElementById("error")!.innerHTML = "Veuillez remplire tous les champs";

        await axios({
            method: "post",
            url: `${url}/user/signin`,
            data: {
                email: emailSI,
                password: passwordSI,
            }
        }).then(res => {
            document.getElementById("error")!.innerHTML = "";
            localStorage.setItem("token", res.data.token)
        }).catch(err => {
            document.getElementById("error")!.innerHTML = "E-mail ou mot de passe incorrect";
            console.error(err);
        })
    };

    //fonction d'inscription
    const SignUp = async () => {
        if (!emailSU || !passwordSU || !user_code || !username) return document.getElementById("error")!.innerHTML = "Veuillez remplire tous les champs";
        if (isNaN(Number(user_code)) || user_code.length < 4 || user_code.length > 4) return document.getElementById("error")!.innerHTML = "Le code utilisateur doit être de 4 chiffres";

        await axios({
            method: "post",
            url: `${url}/user/signup`,
            data: {
                email: emailSU,
                password: passwordSU,
                user_code,
                username,
            }
        }).then(res => {
            document.getElementById("error")!.innerHTML = "";
            localStorage.setItem("token", res.data.token)
        }).catch(err => {
            document.getElementById("error")!.innerHTML = "Error";
            console.log(err)
        })
    }

    return (
        <div className='box'>

            {/* Name de la page */}
            <div className='title'>
                <h1>{comp.login === "signin" ? "Se connecter" : "S'inscrire"}</h1>
            </div>

            {
                comp.login === "signin" ?
                    (
                        <div className='FormSignIn'>
                            <div>
                                <h4>E-mail</h4>
                                <input type={"email"} value={emailSI} onChange={e => setEmailSI(e.target.value)} placeholder={"josee@diament.com"} />
                            </div>
                            <div>
                                <h4>Mot de passe</h4>
                                <input type={"password"} value={passwordSI} onChange={e => setPasswordSI(e.target.value)} placeholder={"MonMotDePassBLBLBL2530"} />
                            </div>
                            <input type={"button"} onClick={SignIn} value={"Confirmer"} id={"connectButton"} />
                            <br />
                            <span id='error'></span>
                        </div>
                    ) : (
                        <div className='FormSignIn'>
                            <div>
                                <h4>Pseudo</h4>
                                <input type={"text"} value={username} onChange={e => setUsername(e.target.value)} placeholder={'Ex: Josee34'} />
                            </div>
                            <div>
                                <h4>Code utilisateur</h4>
                                <input type={"number"} value={user_code} onChange={e => setUser_code(e.target.value)} placeholder={"Ex: 2530"} />
                            </div>
                            <div>
                                <h4>E-mail</h4>
                                <input type={"email"} value={emailSU} onChange={e => setEmailSU(e.target.value)} placeholder={"Ex: josee34@diament.com"} />
                            </div>
                            <div>
                                <h4>Mot de passe</h4>
                                <input type={"password"} value={passwordSU} onChange={e => setPasswordSU(e.target.value)} placeholder={"Ex: MonMotDePasse2530"} />
                            </div>
                            <input type={"button"} onClick={SignUp} value={"Confirmer"} id={"connectButton"} />
                            <br />
                            <span id='error'></span>
                        </div>
                    )
            }
            <div className='link'>
                <a href={comp.login === "signin" ? "/signup" : "/signin"}>{comp.login === "signin" ? "Tu souhaites t'inscrire ?" : "Tu as déjà un compte ?"}</a>
            </div>

        </div>
    );
};

export default WindowLogin;