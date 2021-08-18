import React from 'react'
import StartRating from './StartRating'

const Search = ({searchvalue,handlesearch,serachrate,handlerate}) => {
    return (
        
        <div className="container">

            <h1  > The Best Film</h1>
            <div className="search-container">  
            <input  type="text"  name="" value={searchvalue} onChange={handlesearch} />
             <StartRating rate={serachrate} handlerate={handlerate}/>
            </div>
        </div>
        
   
    );
}

export default Search
