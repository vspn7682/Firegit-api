import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 mx-auto mt-5">
                    <h1>Oops! Page Not found!</h1>
                    <Link to='/'><a>Go to Sign In</a></Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
