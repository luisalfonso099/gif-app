import "./App.css";
import Header from './components/Header.jsx';
import Results from "./components/Results";
import Search from "./components/Search";
import { useEffect, useState } from 'react'
function App() {
  const [trending, setTrending] = useState([])
  const [error, setError] = useState(false)
  const [resultsSearch, setResultsSearch] = useState([])
  const [search, setSearch] = useState("")
  const [dark, setDark] = useState(false)
  const [complet, setComplet] = useState("")
  const apiKey = "b3lT70N0ZqThtwyUdZ3at5H5YdTIYkqP";
  
  useEffect( ()=>{
        const resp = async ()=>{
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=15&api_key=${apiKey}`);
        const {data} = await resp.json()
        if(data.length === 0){
          setError(true)
        }
        if(data.length > 0){
          setResultsSearch(data)
          setError(false)
        }
      }
        resp()
 },[search, setResultsSearch])
 useEffect( () =>{
  const resp = async()=>{
    const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?&limit=15&api_key=${apiKey}`);
    const {data} = await resp.json();
    setTrending(data)
      setError(false)
    }
    resp()
},[])
  return (
    <div 
    className={dark ? "container-dark" : "container"}>
      <Header dark={dark} setDark={setDark}/>
      <Search 
      setComplet={setComplet} 
      complet={complet} 
      dark={dark} 
      setSearch={setSearch} 
      setError={setError} 
      />
     {!error ?
      <Results 
      trending={trending} 
      resultsSearch={resultsSearch}
      search={search}
      setError={setError} 
      error={error}
      /> 
      : 
      <h1 className="error">Error en la búsqueda intenta de nuevo</h1>
      }
    </div>
)}
export default App;
