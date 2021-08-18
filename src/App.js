
import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Search from './component/Search';
import { moviesData } from './Data';

function App() {
  const [movies, setMovies]= useState(moviesData);
  const [searchvalue, setSearchvalue]= useState("");
  const [serachrate, setSerachrate] = useState(1);
  const handleadd=(newmovie) => {
    setMovies([...movies, newmovie])
  }
  const handlesearch=(e)=>{
    setSearchvalue(e.target.value)
  }
  const handlerate=(newrate) => {
      setSerachrate(newrate)
    }
   
  return (
    <div className="app" >
    <Search 
    searchvalue={searchvalue}
    handlesearch={handlesearch}
    serachrate={serachrate} 
    handlerate={handlerate}
    />
     
     <MovieList films= {movies.filter(
       (movie) => movie.name.toLowerCase().includes(
         searchvalue.toLowerCase().trim()
       )&&
       movie.rating>=serachrate
     )
    } /> 
     <AddMovie handleadd={handleadd}/>
    </div>
    
  );
}

export default App;
