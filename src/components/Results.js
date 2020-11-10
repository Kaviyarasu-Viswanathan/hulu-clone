import React from 'react'
import './Results.css'
import VideoCard from '../components/VideoCard'
import {useState, useEffect} from 'react'
import axios from '../axios/axios';
import FlipMove from 'react-flip-move';


function Resuts({selectedOption}) {

     const [movies, setMovies] = useState([]);
     useEffect(()=> {
        async function fetchData (){
          const request = await axios.get(selectedOption);
          console.log(request)
          setMovies(request.data.results);
         return request ;
        }
        fetchData();
     },[selectedOption]);



    return (
        <div className="results">
          <FlipMove>
                 {movies.map ((movie) => (
              <VideoCard movie ={movie}/>
            ) )} 
           
          </FlipMove>

        
            
            
        </div>
    )
}

export default Resuts
