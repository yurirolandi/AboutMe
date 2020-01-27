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
                    <h1>Olá, me chamo Yuri</h1>
                    <h3>Sou Desenvolvedor Front-End no Medgrupo</h3>
                    <p>
                    Tenho 26 anos, há 2 anos venho me divertindo nessa área e sempre em busca de desafios que me levem a novos aprendizados. Sou apaixonado por games e códigos. 
                    Graduação em Análise e Desenvolvimento de Sistemas em andamento. 
                    Hoje me empenho como Desenvolvedor Javascript Jr, tendo conhecimento em em HTML, CSS, Sass, Git, React.js, Vue.Js, javaScript e Scrum.
                    </p>
                    <p>
                        <b>"Com grandes poderes vêm grandes responsabilidades" Tio Ben. </b>
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

              
                </BoxText>

            </ContainerRow>

        </>
    );
}

