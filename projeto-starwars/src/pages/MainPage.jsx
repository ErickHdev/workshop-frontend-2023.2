import Header from "../components/Header";
import StarWarsLogo from "/Star_Wars_Logo.svg.png";
import starWarsTimeLine from "/timeline.png";
import  "./MainPage.css";


export default function MainPage() {
    return ( 
        <>
            <Header />
            <div className="stars">
                <main>
                    <div>
                        <img id="logo-mainpage" src={StarWarsLogo} alt="logo-main-page" />
                    </div>
                    <div>
                        <div>
                            <h3 id="fala-darth" className="blue-font">“Eu sou seu pai.”</h3>
                        </div>
                        <div className="blue-font texto-main">
                            <p>
                                É uma simples frase, mas para fãs ao redor do mundo, ela faz alusão a uma batalha eterna entre o bem e o mal em uma galáxia distante. Ela evoca imagens de naves espaciais em lutas acompanhadas pelo som distinto de lasers, de guerras sendo travadas em planetas verdejantes ou em paisagens desérticas entre inúmeras raças.
                            </p>

                            <p>
                                Desde a sua estrondosa estreia nos cinemas em 1977 e a subsequente febre, a criação de George Lucas, Star Wars, percorreu um longo caminho, adicionando títulos e personagens ao seu portfólio de franquias que são demasiado numerosos para acompanhar. Enquanto Luke Skywalker, Yoda, Obi-Wan Kenobi e Chewbacca alcançaram status icônico além do cinema, personagens menos conhecidos ainda precisam conquistar a fama. Talvez você já tenha ouvido falar do Mandaloriano e Ahsoka Tano, mas você conhece o vilão Cad Bane ou Bossk’wassak’Cradossk?
                            </p>
                            <p>
                                Em comemoração e antecipação do próximo Dia de Star Wars, em 4 de maio de 2023 (e o 40º aniversário de O Retorno de Jedi), compilamos todos os filmes e séries do universo Star Wars em ordem cronológica. A Batalha da Estrela da Morte (também conhecida como Batalha de Yavin) marca um momento crucial na linha do tempo de Star Wars, com uma estrutura semelhante à de AC e DC. Portanto, o calendário padrão galáctico usa ABY (Antes da Batalha de Yavin) e DBY (Depois da Batalha de Yavin).
                            </p>
                            <div>
                                <img src={starWarsTimeLine} alt="" width="500px" id="img-cronologia"/>
                            </div>
                            <a href="https://www.expressvpn.com/pt/blog/dia-de-star-wars-todos-os-filmes-e-series-de-star-wars-em-ordem-cronologica/"
                            >
                                Fonte
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    ) 
    }