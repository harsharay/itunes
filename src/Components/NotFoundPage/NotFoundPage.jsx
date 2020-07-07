import React from 'react'
import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div>
            <h1>404 Not found, return <Link to="/itunes">HOME</Link></h1>
        </div>
    )
}

export default NotFoundPage
