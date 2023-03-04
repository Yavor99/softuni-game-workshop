import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import * as gameService from './service/gameService';
import { Catalog } from './components/catalog/Catalog';
import { CreateGame } from './components/createGame/CreateGame';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { GameDetails } from './components/gameDetails/GameDetails';
import './App.css';


function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            });
    }, []);

    return (
        <div id="box">
            <Header />
            
            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home games={games}/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/create" element={<CreateGame />}/>
                    <Route path="/catalog" element={<Catalog games={games}/>}/>
                    <Route path="/catalog/:gameId" element={<GameDetails/>}/>
                </Routes>                
            </main>
                                    

            {/* Create Page ( Only for logged-in users ) */}
            
            {/* Edit Page ( Only for the creator )*/}
            {/* <section id="edit-page" className="auth">
                <form id="edit">
                    <div className="container">
                        <h1>Edit Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" defaultValue="" />
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" defaultValue="" />
                        <label htmlFor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            min={1}
                            defaultValue=""
                        />
                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <input className="btn submit" type="submit" defaultValue="Edit Game" />
                    </div>
                </form>
            </section> */}
            {/*Details Page*/}
            
            {/* Catalogue */}
           
        </div>

    );



}

export default App;
