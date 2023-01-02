import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Consulta from "./pages/Consulta";
import Home from "./pages/home";
import Header from "./components/header";



export default function Rotas() {
    return (


        <BrowserRouter>

            <Header />
            <Routes>


                <Route path="/Consulta" element={<Consulta />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>

    )
}
