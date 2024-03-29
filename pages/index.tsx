import { useState } from "react";
import Porta from "../components/Porta";
import { criarPortas, atualizarPortas } from '../functions/portas'


export default function Home() {
  

const [portas, setPortas] = useState(criarPortas(4, 2))
function renderizarPortas(){
  return portas.map(porta =>{
    return  (
    <Porta 
    key={porta.numero}
    value={porta} 
    onChange={novaPorta => {setPortas(atualizarPortas(portas, novaPorta))}} />
    )
  })
}

  return (
    <div style={{ display: 'flex', flex: 1}}>
        {renderizarPortas()}      
    </div >
  )
}
