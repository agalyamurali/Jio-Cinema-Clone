import Show from "./Show";

function Shows(props){
  return(
       <>

       <div className="favs">
        <h1>{props.name}</h1>
        <div className="show" >
          {
            props.movies.map((movie=>{
                  return <Show movie={movie}/>
            }
            ))
          }
        </div>
       </div>
       </>
  )
   
}

export default Shows;
