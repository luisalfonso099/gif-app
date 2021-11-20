import React from 'react'

import "./Results.css"
const Results = ({trending, resultsSearch, isLoading, error}) => {
    return (
        <div className="conteiner-results">
            <h3>Resultados de la búsqueda</h3>
            <div 
            className="results animate__animated animate__zoomIn">
                {resultsSearch.length > 0 && !error &&
                resultsSearch.map(i => 
                <a 
                rel = "noreferrer" 
                target="_blank" 
                href={i.bitly_gif_url} 
                key={i.id}>
                    <img 
                    className="images animate__animated animate__zoomIn" 
                    alt={i.id}  
                    src={i.images.original.url} 
                    />
                </a>)}
                { !error &&
                trending.map(i => 
                <a 
                rel = "noreferrer" 
                target="_blank" 
                href={i.bitly_gif_url} 
                key={i.id}>
                    <img 
                    className="images animate__animated animate__zoomIn" 
                    alt={i.id}  
                    src={i.images.original.url}
                    />
                </a>)};
            </div>
        </div>
    )
}

export default Results;