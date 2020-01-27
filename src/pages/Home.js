import React from 'react';
import { ContainerColumn, ContainerRow } from '../styles/Global';
import { H1, BoxImg, BoxText, AboutList, AboutContent } from './style.js';
import Midia from '../components/SocialMedia/SocialMedia';


import perfil from '../utils/imgs/perfil.jpeg';

export default function Home() {
    return (
        <>
            <ContainerColumn>
                <H1>
                    Sobre
                </H1>

            </ContainerColumn>

            <ContainerRow>
                <BoxImg>
                    <Midia />
                    <img src={perfil} alt="perfil" />
                </BoxImg>

                <BoxText>
                    <h1>Hello, me chamo Yuri</h1>
                    <h3>Sou Desenvolvedor Front-End na Medgrupo</h3>
                    <p>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>
                    <AboutList>
                        <AboutContent>
                            <label>Idade</label>
                            <p>26 anos</p>
                        </AboutContent>
                        <AboutContent>
                            <label>E-mail</label>
                            <p>sd.rolandi@gmail.com</p>
                        </AboutContent>
                        <AboutContent>
                            <label>Telefone</label>
                            <p>(21) 973629318</p>
                        </AboutContent>
                        <AboutContent>
                            <label>Freelance</label>
                            <p>Disponivel</p>
                        </AboutContent>
                        <AboutContent>
                            <label>Discord</label>
                            <p>Yuri Rolandi#9837</p>
                        </AboutContent>
                    </AboutList>

                    <button>
                       <a href="../utils/yurirolandi.pdf" download>
                            DOWNLOAD CV
                       </a>
                    </button>
                </BoxText>

            </ContainerRow>

        </>
    );
}

