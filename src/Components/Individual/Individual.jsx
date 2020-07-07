import React,{ useState,useEffect } from 'react'

import "./Individual.styles.css"

function Individual(props) {


    const [data,setData] = useState("")

    useEffect(() => {
        console.log(props)
        let id = props.match.params.trackId
        fetch(`https://itunes.apple.com/search?term=${id}&entity=song`)
        .then(data => data.json())
        .then(json => setData(json.results[0]))
        // .then(json => console.log(json.results[0].artistName))
    },[])


    return (
        <div className="sep-page">
            <img src={data.artworkUrl100} alt={data.collectionName} />
            <div className="content">
                <h1>{data.trackName}</h1>
                <h2>{data.artistName}</h2>
                <h3>{data.collectionName}</h3>
                {/* <audio controls="controls">
                    <source src={data.previewUrl} type="audio/m4a" />
                </audio> */}
                <br/>
                <a href={data.trackViewUrl}>View the track in Itunes</a>
                <h4>Track Price:{data.trackPrice}</h4>
                <h4>Collection Price:{data.collectionPrice}</h4>
                <a href={data.collectionViewUrl}>View this collection in Itunes</a>
            </div>
            
        </div>
    )
}

export default Individual
