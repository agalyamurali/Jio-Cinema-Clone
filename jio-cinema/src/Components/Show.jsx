export default function Show(props){
    return(
        <>

            <div className="show">
                <img src={props.movie.imageUrl} alt="movie"/>
                <div className="movieTitle">
                {props.movie.name}
            </div>

              </div> 
        </>
    )
}