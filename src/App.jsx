import './App.css' 
import { useState } from 'react'


function KrwCurrenyInput({krw , onClickKrwCurreny}){
   
  return ( 
    <div>
      <span>krw : </span><input type="text" value={krw} onChange={onClickKrwCurreny}/> 
   </div>
  )
} 

function UsdCurrenyInput({usd, onClickUsdCurreny}){
   
  return ( 
    <div>
       <span>usd : </span>  <input type="text" value={usd} onChange={onClickUsdCurreny}/> 
   </div>
  )
}

function App() { 
  const [krw,setKrw] = useState(0);
  const [usd,setUsd] = useState(0);

  const curreny = 1470; 
 
  const onClickKrwCurreny = (e) => { 
    setUsd(Number(e.target.value) / curreny);
    setKrw(Number(e.target.value));
  }

  const onClickUsdCurreny = (e) => { 
    setKrw(Number(e.target.value) * curreny);
    setUsd(Number(e.target.value));

  }

  return (
    <div className="App">
      <h1>환율 변환기 (KRW - USD) </h1> 
     <KrwCurrenyInput krw={krw} onClickKrwCurreny={onClickKrwCurreny}/> 
     <UsdCurrenyInput usd={usd} onClickUsdCurreny={onClickUsdCurreny}/> 
    </div>
  )
}

export default App
