import { useEffect , useState} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Shows from '../Components/Shows';
import Tags from '../Components/Tags';
export default function Home()
    {
        let [movies , setMovies] = useState([]);
        let [actionMovies, setActionMovies] = useState([]);
        let [hindiMovies, setHindiMovies] = useState([]);
        let [englishMovies, setEnglishMovies] = useState([]);
        let [kidsMovies, setKidsMovies] = useState([]);


        useEffect(async()=>{
            try
            {
                let movieResponse = await fetch("http://localhost:3000/movies")
                let moviesData = await movieResponse.json()
                setMovies(moviesData);

                let actionMovies = moviesData.filter((movie)=>{return movie.genre.includes("Action")})
                setActionMovies(actionMovies.slice(0,6))

                let hindiMovies = moviesData.filter((movie)=>{return movie.language === "Hindi"})
                setHindiMovies(hindiMovies.slice(0,6))

                let englishMovies = moviesData.filter((movie)=>{return movie.language === "English"})
                setEnglishMovies(englishMovies.slice(0,6))

                let kidsMovies = moviesData.filter((movie)=>{return movie.genre.includes("Animation")})
                setKidsMovies(kidsMovies.slice(0,6))


            }
            catch(err)
            {
                console.log(err)
            }
             },[])
        
        return (
            <>
                <Header movies = {movies}/>
                <Tags/>
                <Shows  name="English Movies" movies= {englishMovies}  />
                <Shows name="Hindi Movies" movies= {hindiMovies} />
                <Shows  name="kids Movies" movies={kidsMovies} />
                <Shows  name="Action shows" movies={actionMovies} />
                <Footer/>
            </> 
        )
    }
