import Header from "../components/Header";
import getPersonagens from "../API/API";
import { useEffect, useState } from "react";
import "./Galeria.css";

export default function Galeria() {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const personagensx = async () => {
            const personagensx = await getPersonagens();
            setPersonagens(personagensx);
            setLoading(false);
        };
        personagensx();
    }, []);

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="stars">
                <main>
                    {loading
                    ? <h1 id="card">Carregando...</h1>
                    : <h1 id="card">Galeria de personagens</h1>
                    }
                </main>
                <div className="container">
                    {personagens.map((personagem) => (
                        <div className="card" key={ personagem.id }>
                            <div className="card-body">
                                <div className="card-part-1">
                                    <h2 className="card-title">{personagem.name}</h2>
                                </div>
                                <div className="card-part-2">
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Massa:</h4>
                                        <p>{ personagem.mass }</p>
                                    </div>
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Cor do cabelo: </h4>
                                        <p>{ personagem.hair_color }</p>
                                    </div>
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Cor da pele: </h4>
                                        <p>{ personagem.skin_color }</p>
                                    </div>
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Cor dos Olhos: </h4>
                                        <p>{ personagem.eye_color }</p>
                                    </div>
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Data de Nascimento: </h4>
                                        <p>{ personagem.birth_year }</p>
                                    </div>
                                    <div className="card-part-2-view">
                                        <h4 className="card-text">Sexo:</h4>
                                        <p>{ personagem.gender }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}