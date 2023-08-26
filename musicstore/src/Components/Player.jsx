export const Player= ({fn, song}) =>{
    console.log('Song Object Rec',song);
    return(
    <div>
        <button onClick={()=>{
            fn(false,null);
        }} className="btn btn-success">Back to Songs</button>
        <p>
        <img src={song.artworkUrl100}/>
        {song?.artistName} {song?.trackName}
        </p>
        <br />
        <br />
    <audio controls>

        <source src={song?.previewUrl} type="audio/mp4"/>
    </audio>
    </div>)
}