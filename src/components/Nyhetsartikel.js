import React from 'react';


function Nyhetsartikel(props) {
  return (
    <article>
      <img src={props.artikellista.urlToImage} />
      <h2>{props.artikellista.title}</h2>
      <p>{props.artikellista.description}</p>
      <a>Läs mer..</a>
    </article>
  );
 }

export default Nyhetsartikel;