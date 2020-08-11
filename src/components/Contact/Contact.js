import React from 'react';
import './Contact.css'
import {DeviceMobileIcon, MailIcon} from '@primer/octicons-react'
import avatar from '../LandingPage/93.png';

function Contact (){
    return(
        <div>
            <div class ="container">
                <div class="row">
                    <div class={"col-sm"}>
                        <div class={"text-body"}>
                            <img src={avatar} width="400" height="400"/>
                            <h1 class={"mt-5"}>Joe Torres</h1>
                            <h1>I am a web developer and programmer living in southern California</h1>

                        </div>
                    </div>
                    <div class={"col-sm box-it"}>
                        <h1 className={"text-details mt-5"}>Contact Me</h1>
                        <hr/>
                        <h1 className={"text-details mt-5"}>949-303-0202</h1>
                        <h1 className={"text-details mb-5"}>jtorresuci@gmail.com</h1>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Contact;
