import React from 'react';

//funzione scritta con arrow function
//è un componente funzionale,  ha un input e un output.

//NON HA UNO STATO

const Itemlist = props =>
{
  return (
    <div >
        {props.items.map(item=> <p> Ciao {item} </p>)}
    </div>
  );
}

//è equivalente a:
/*
function Itemlist(props)
{
  return (
    <div >
        {props.items.map(item=> <p> Ciao {item} </p>)}
    </div>
  );
}
*/

export default Itemlist;