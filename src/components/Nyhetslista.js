import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {
  return (
    <section>
    {props.artikellista.map(function (item, index) {
      return <Nyhetsartikel artikellista={item} key={`artikel${index}`}/>
    })}
    </section>
  );

}
 
export default Nyhetslista;