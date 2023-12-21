import React from 'react';
import { useParams } from "react-router-dom";

let mybooks = [
  {
    id: 0,
    name: 'Rich dad poor dad'
  },
  {
    id: 1,
    name: 'Idiot machin'
  },

]

const Books = (props) => {
  let params = useParams();
  return (
    <>
    <h1>Books</h1>
    <h2>Dans link la ena {params.id}</h2>
     <h2>books { mybooks.filter(book => book.id == params.id)[0].name }!</h2>
    </>
 
  )
}

export default Books