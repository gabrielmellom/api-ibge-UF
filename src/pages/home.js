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
                    <h3>Essa seria a Home Page da nossa aplicação. Por aqui consigo demonstrar a parte prática da funcionalidade de uma SPA, alterando o conteúdo sem a necessidade de um novo carregamento, utilizando o sistema de rotas do React  </h3>
                </div>
                <div className='box3'>
                    <h4>Clique no botão a cima para mostrar a página de consulta de UF/Município, consumindo a Api do IBGE com axios, e aplicando conceitos centrais do redux: store, reducers e actions. Espero que gostem do meu projeto. Obrigado pela oportunidade.  </h4>
                </div>
      </section>
    </>
  )}