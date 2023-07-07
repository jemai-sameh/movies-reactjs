import { React} from "react";
import {useEffect} from 'react';
import './App.css';
//import {searchIcon} from './search.svg';


const API_URL="http://www.omdbapi.com?apikey=82ce53d3";

const movie1={
  "Title":"Amazin Spriderman ",
  "Year": "2015",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster":"N/A"
}

const App=()=>{
      const searchMovies= async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        console.log(data);      
      }

      useEffect(()=>{
        searchMovies('Spiderman');
      },[]
      )
    return (
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input placeholder="Search for movies" value="Superman" onChange={()=>{}}/>
          <img src="./search.svg" alt="search" onClick={()=>{}} />
        </div>
          <div className="container">
            <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
              <img src={movie1.Poster!=='N/A'? movie1.Poster:'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
            </div>
            
          </div>
         
        </div>
      );

}



export default App;
