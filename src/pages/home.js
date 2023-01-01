import './home.css'
import React from 'react'
import clique from "../components/img/clique/clique.png"



export default function Home() {
  return (
      <>  
      <div className='clique'>
         <img className='icon' src={clique} alt="clique" />
      </div>


      <section className='section_home'>
                <div className='box'>
                    <h1> Projeto tecnico Ipam</h1>
                </div>
                <div className='box2'>
                    <h3>Essa seria a Home Page da nossa aplicação. Por aqui consigo demonstrar a parte pratica da funcionalidade de uma SPA, auterando o conteudo sem a necessidade de um novo carregamento, utilizando o sistema de rotas do React  </h3>
                </div>
                <div className='box3'>
                    <h4>Clique no botao a cima para mostrar a pagina de consulta de UF/municipois, consumuindo a api do IBGE com axios, e aplicando conceitos centrais do redux: store, reducers e actions. espero que gostem do meu projeto. obrigado pela oportunidade. </h4>
                </div>
      </section>
    </>
  )}