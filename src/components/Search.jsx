import {useRef} from "react"
import iconSearch from '../assets/images/icon-search.svg'
import iconHeader from '../assets/images/ilustra_header.svg'
import Autocom from './Autocom'
import "./Search.css"

const Search = ({
    setSearch,
    complet,
    dark,
    setComplet,
    setError
}) => {
    const ref = useRef("")
    const valueSearch = (e)=>{
        e.preventDefault()
        const form = e.currentTarget;
        const gifName = form.search.value
            if(gifName === ""){
                setError(true)
            }else{
            setSearch(gifName)
            setComplet("")
            form.reset();
            }
    }
    return (
        <div className="conatiner-seacrh">
            <h1>¡Inspirate y busca los mejores GIFS!</h1>
            <img alt="imagen" src={iconHeader}/>
            <form 
                className="form-search" 
                onSubmit={valueSearch}
            >
                <input 
                ref={ref}
                autoComplete="off" 
                onChange={(e)=> setComplet(e.target.value)} 
                className={dark? "search-dark":"search"} 
                placeholder="Busca gifs" 
                type="search" 
                name="search" 
                aria-label="Search"
                />
                
                <input 
                aria-labelledby="lupa" 
                type="image" 
                src={iconSearch}
                />
            </form>
            { 
               complet !== "" 
               && 
               <Autocom 
                setComplet={setComplet} 
                complet={complet} 
                setSearch={setSearch}/> 
            }
            
        </div>
    )
}

export default Search
