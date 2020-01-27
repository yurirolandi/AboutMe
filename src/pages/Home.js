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
                        Atualmente tenho 26 anos e 2 anos no mercado de trabalho. Estou sempre em busca do aprendizado, Sou apaixonado pelo mundo de games e codigos.

                        Hoje faço uma Graduação em Análise e desenvolvimento de sistemas e trabalho como Desenvolvedor javaScript Jr.

                        Tenho conhecimento em HTML, CSS, Sass, Git, React.js, Vue.Js, javaScript e Scrum. Sempre buscando novos desafios que me tragam conhecimento e uma maior experiência profissional. Me dou bem com os prazos e normas a serem seguidos.
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

