import React,{ useState } from 'react'
import { connect } from "react-redux";
import { Input } from 'antd';
import { Link } from "react-router-dom"

import "./Main.styles.css"

const Main = (props) => {

    const [state,setState] = useState({
        query:"",
        loading: false
    })


    const handleChange = e => {
        let newVal = e.target.value
        setState(prevVal => {
            return {
                ...prevVal,
                query : newVal,
                loading: false
            }
        })
    }



    return (
        <div className="search">
            <h2>Search for an artist</h2>
            <Input placeholder="type here..." onChange={handleChange} value={state.query}/>
            <button onClick={() => {
                if(state.query.includes(" ")){
                    let temporary = state.query.split(" ")
                    let newQuery = temporary.join("+")
                    props.handleClick(newQuery)
                    setState({
                        query:""
                    })
                }else {
                    props.handleClick(state.query)
                }
            }}>Search</button>
            
            <div className="results-list">
                {props.data[0]!=="Error" ?
                    props.data.map((item,index) => 
                        <div className="individual" key={index}>
                        <Link to={process.env.PUBLIC_URL+'/id/'+ item.trackId} target="_blank">
                            <h1>{item.trackName}</h1>
                        </Link>
                            <h3>{item.collectionName}</h3>
                            <img src={item.artworkUrl100} alt={item.collectionName} />
                            <a href={item.trackViewUrl} target="_blank">View the track in Itunes</a>
                            <h4>Track Price:{item.trackPrice}</h4>
                            <h4>Collection Price:{item.collectionPrice}</h4>
                            <a href={item.collectionViewUrl} target="_blank">View this collection in Itunes</a>
                        </div>
                )
                :
                <h2 className="error">No response, try another valid search</h2>}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        data : state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick : newVal => dispatch({type:"SEARCH",payload:newVal})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);