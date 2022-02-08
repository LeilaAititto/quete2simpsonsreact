import React,{useState,useEffect} from "react";
import axios from 'axios'



function App() {
  const [quote,setQuote] = useState('')
  const[count,setCount] = useState(0)
  useEffect(() => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes').then(response =>{
      setQuote(response.data[0])
     
    })
  },[count]);

  return (
    <div className="App">
     <p>{quote.quote}</p>
     <img src={quote.image}/>
         <button onClick={() => setCount(prevCount => prevCount + 1)}> Changer la citation</button> 
    </div>
  );
}

export default App;
