import React from 'react';
import { UserMe } from '../types/allTypes';
import './CSS/LeftBar.css'

const LeftBar = (props: {user?:UserMe}) => {

    const flapMenu = () => {
        let menu = document.getElementById("menuLinks_Card");
        if (menu?.style.display === "flex") {
            menu.style.display = "none"
        } else {
            menu!.style.display = "flex"
        }
    };

    const ListeServeur = () => {
        let menu = document.getElementById("serverList");
        if (menu?.style.display === "none") {
            menu.style.display = "flex"
        }else {
            menu!.style.display = "none"
        }
    };

    const ListeAmis = () => {
        let menu = document.getElementById("friendsList");
        if (menu?.style.display === "none") {
            menu.style.display = "flex"
        }else {
            menu!.style.display = "none"
        }
    };


    return (
        <div className='leftBar'>

            <div id='insideLeftBar'>

                {/* Card User et menu général */}
                <div className='underUserCard'>

                    <div className='userCard'>
                        <img src={"https://cdna.artstation.com/p/assets/covers/images/031/167/572/large/art-of-milee-art-of-milee-art-of-milee-genshin-impact-paimon-icon.jpg?1602789607"} alt="Photo de profile" />
                        <div className='user_info'>
                            <p className='username'>{props.user?.username}</p>
                            <p className='user_code'>#{props.user?.user_code}</p>
                            <div className='listBadges'>
                                {
                                    props.user?.flags_list.map(e => {

                                        return (
                                            <div>
                                                <svg viewBox='0 0 100 100' style={{width:"20px", paddingTop:"5px"}}>
                                                    <path d='M0 0 L100 100 M0 100 L100 0' stroke='red' strokeWidth={10} />
                                                </svg>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* Liste des menus */}
                    <div className='menuLinks_Card' id='menuLinks_Card' style={{ display: "flex" }}>
                        <a href="/app/me/profile">🥋  Profile</a>
                        <a href="/app/me/reward">🏆  Succès</a>
                        <a href="/app/me/skills">🎯  Compétences</a>
                        <a href="/app/me/following">📖  Abonnements</a>
                        <a href="/app/settings">🛠️  Paramètres</a>
                    </div>

                    {/* Bouton de rabait menu */}
                    <div id='flap'>
                        <div onClick={flapMenu} />
                    </div>
                </div>

                {/* Liste amis (messages) */}
                <div className='underListAmis'>

                    <div id='friendsListeName' onClick={ListeAmis}>
                        <p>Amis</p>
                    </div>

                    <div>
                        <div id='friendsList' style={{ display: "none" }}>
                            <p>Liste</p>
                        </div>
                    </div>

                </div>

                {/* Liste serveur (messages) */}
                <div className='underListServer'>

                    <div id='serverListeName' onClick={ListeServeur}>
                        <p>Serveurs (32)</p>
                    </div>

                    <div>
                        <div id='serverList' style={{ display: "none" }}>
                            <p>Liste</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default LeftBar;