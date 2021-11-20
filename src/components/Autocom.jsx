import { useEffect,  useState } from 'react';
import "./Autocom.css"

const Autocom = ({complet,setSearch,setComplet}) => {
    const [recomendaciones, setRecomendacion] = useState([]) 
    const apiKey = "b3lT70N0ZqThtwyUdZ3at5H5YdTIYkqP";
   
    useEffect(()=>{
        const data = async()=>{
            const resp = await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${complet}&limit=5&api_key=${apiKey}`)
            const {data} = await resp.json()
            setRecomendacion(data)
        }
      data()
    },[complet,setRecomendacion,setComplet])
    useEffect(()=>{
        return () => setRecomendacion([])
    },[setRecomendacion])
    const searchComplet = (e)=>{
        e.preventDefault()
        let name = e.target.name
        setSearch(name)
        setComplet("")
    }
    return (
        <div className="container-autocomplet animate__animated animate__zoomIn">
                {recomendaciones.map(item =>  
                <div 
                className="cont-btn "
                key={item.name}
                >
                    <button 
                    key={item.name}
                    name={item.name}
                    onClick={searchComplet}
                    >
                        <i className="fas fa-search"></i>
                        {item.name}
                    </button>
                </div>
                )}
        </div>
    )
}

export default Autocom
