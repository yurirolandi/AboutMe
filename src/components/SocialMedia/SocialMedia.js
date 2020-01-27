import React from 'react';
import { SocialMedia } from './styled';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Midia(){
    return(
        <SocialMedia>
            <button>
               <a href="https://github.com/yurirolandi" target="_blank">
                   <FaGithub size={24} />
               </a>
            </button>
            <button>
               <a href="https://www.instagram.com/yurirolandi21/?hl=pt-br" target="_blank">
                   <FaInstagram size={24} />
               </a>
            </button>
            <button>
               <a href="https://www.linkedin.com/in/yuri-rolandi-44a362bb/" target="_blank">
                   <FaLinkedin size={24} />
               </a>
            </button>
           
        </SocialMedia>

    )
}