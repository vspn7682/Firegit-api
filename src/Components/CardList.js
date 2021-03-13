import axios from "axios";
import React, { useState, useEffect } from "react";
import Axios from 'axios'

const CardList = ({ repos_url }) => {

    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const { data } = await Axios.get( repos_url )
        setRepos(data)
        console.log(repos) 
    }

    useEffect(() => {
        fetchRepos()
    }, [repos_url])
 

    return (
        <div className="container-fluid">
            <ul className="list-group">
                {repos.map(repo => {
                    return <li key={repo.id} className="list-group-item">
                        <h5>Project: <a target="_blank" href={repo.html_url}>{ repo.name}</a></h5>
                        <h6>Owner: {repo.owner.login}</h6>
                        <p>Language: {repo.language}</p>
                        <p>Description: {repo.description ? (repo.description): 'No Description'}</p>
                    </li>
                })}
               
            </ul>
        </div>
    );
};

export default CardList;
