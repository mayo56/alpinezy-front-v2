import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/WindowLogin.css";

const url = "https://api.alpinezy.com"

const WindowLogin = (props: { login: 'signin' | 'signup' }) => {
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
    const SignIn = async (): Promise<string | void> => {
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
            nav("/app/thread")
        }).catch(err => {
            document.getElementById("error")!.innerHTML = "E-mail ou mot de passe incorrect";
            console.error(err);
        })
    };

    //fonction d'inscription
    const SignUp = async (): Promise<string | void> => {
        if (!emailSU || !passwordSU || !user_code || !username) return document.getElementById("error")!.innerHTML = "Veuillez remplir tous les champs";
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
            nav("/app/thread")
        }).catch(err => {
            document.getElementById("error")!.innerHTML = err.response.data;
            console.log(err)
        })
    }

    return (
        <div id='underbox'>
            <div className='box'>
                <h1>{props.login === "signin" ? "Se connecter" : "S'inscrire"}</h1>

                {
                    props.login === "signin" ?
                        (
                            <div>
                                <form>
                                    <input type="email" className='inputLogin' placeholder='E-mail' value={emailSI} onChange={e => setEmailSI(e.target.value)} />
                                    <br />
                                    <input type="password" className='inputLogin' placeholder='Mot de passe' value={passwordSI} onChange={e => setPasswordSI(e.target.value)} />
                                    <br />
                                    <input type="button" value="Se connecter" className='buttonLogin' onClick={SignIn} />
                                </form>
                            </div>
                        ) : (
                            <div>
                                <form>
                                    <input type="text" className='inputLogin' placeholder='Pseudo (e.g. Josee)' value={username} onChange={e => setUsername(e.target.value)} />
                                    <br />
                                    <input type={"number"} className='inputLogin' placeholder='Code utilisateur (e.g. 1578)' value={user_code} onChange={e => setUser_code(e.target.value)} />
                                    <br />
                                    <input type="email" className='inputLogin' placeholder='E-mail (e.g. josee@diament.com)' value={emailSU} onChange={e => setEmailSU(e.target.value)} />
                                    <br />
                                    <input type="password" className='inputLogin' placeholder='Mot de passe' value={passwordSU} onChange={e => setPasswordSU(e.target.value)} />
                                    <br />
                                    <input type="button" value="Se connecter" className='buttonLogin' onClick={SignUp} />
                                </form>
                            </div>
                        )
                }
                <span id='error'></span>
            </div>
            <div id='links'>
                <a href={props.login === "signin" ? "/signup" : "/signin"}>{props.login === "signin" ? "S'inscrire ?" : "Se connecter ?"}</a>
                <a href={props.login === "signin" ? "" : ""} title='Ne fonctionne pas pour le moment'>{props.login === "signin" ? "Mot de passe oublié ?" : "Aide d'inscription ?"}</a>
            </div>
        </div>
    );
};

export default WindowLogin;