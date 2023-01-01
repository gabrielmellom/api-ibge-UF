import axios from "axios";
import React, {  useEffect, useState } from 'react';

 function ConsumoApi() {

  const [cidades, setCidades] = useState([])
  const [municipio, setMunicipio] = useState([])
  const [idUf, setidUf] = useState("0")
  const [info, setInfo] = useState([])
  const [teste, setTeste] = useState([])
// Consumindo a api e salvando suas inforacoes na var cidade
  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((Response) => {
        setCidades(Response.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios`)
      .then((Response) => {
        setMunicipio(Response.data)
      })
  }, [idUf])

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${info}/distritos`)
      .then((Response) => {
        setTeste(Response.data[0])
      })

  }, [info])

for( let prop in teste){
  var resultado = teste.municipio.microrregiao.mesorregiao.UF.sigla
  var Regiao =    teste.municipio.microrregiao.mesorregiao.UF.regiao.nome
  var microrregiao =  teste.municipio.microrregiao.nome
  var mesorregiao =  teste.municipio.microrregiao.mesorregiao.nome
}
  function handleChange(event) {
    const valor = event.target.value
    setidUf(valor)
  }
  function valorMunicipio(event) {
    const valor = event.target.value
    setInfo(valor)
    
  } 
  return (
    <>
      <div className='container'>
        <div className='interno'>
          <img />
          <h1>Selecione o estado e o municipio para obter mais informacoes</h1>
          <div className='option'>
            <select id="uf" onChange={handleChange} >
              <option value='0'>Selecione o estado</option>
              {cidades.map(uf => (<option key={uf.id} value={uf.id}   > {uf.nome} </option>))}
            </select>
            <select name='city' id="city" onChange={valorMunicipio} >
              <option value='0'>Selecione o municipio</option>
              {municipio.map((municipio) => (<option key={municipio.id} value={municipio.id}> {municipio.nome} </option>))}
            </select>
          
          </div>
        </div>
        <section className="box_info">
          <div className="div_info">
              <h2> Microregiao</h2>
              <p> {microrregiao}</p>
             
          </div>
          <div className="div_info">
              <h2>Mesorregiao</h2>
              <p> {mesorregiao}</p>
          </div>
          <div className="div_info">
              <h2>UF/Estado</h2>
              <p>{resultado}</p>
          </div >
          <div className="div_info">
              <h2>Regiao </h2>
              <p>{Regiao}</p>
          </div>
      </section>
      </div>
    </>     
  );
}
export default ConsumoApi;
