import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const MiApi = ({ valorBusqueda }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getCharacter();

  }, []);


  //Llamado a la API
    async function getCharacter() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
       
    setResults(data.results);
     //Ordenar resultados alfabeticamente
     setResults(data.results.sort((a, b) => a.name.localeCompare(b.title)))
    console.log(data);  
  }

  return (

  
    <div>
      <div className='row'>
        {
          //Filtro busqueda
          results
            .filter((res) => {
              return res.name.toLowerCase().includes(valorBusqueda.toLowerCase());
            })
            .map((res, index) => (
              <div key={index} className="col-3">

                <div>
                  <Card style={{ width: '18rem', marginTop: '1rem' }}>
                    <Card.Img img src={res.image} variant="top" className='imgD' />
                    <Card.Body>
                      <Card.Title className='titulo'>{res.name}</Card.Title>
                      <Card.Subtitle className='subt'><p>Status: {res.status}</p></Card.Subtitle>
                      <Card.Text className='subtext'><p>Especie: {res.species}</p></Card.Text>
                    </Card.Body>
                  </Card>

                </div>
              </div>
            ))}
      </div>
    </div>

  )
}

export default MiApi;