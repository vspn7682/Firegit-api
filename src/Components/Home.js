import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Card from './Card'
import CardList from './CardList'
import UserContext from '../Context/UserContext'

const Home = () => {

    const context = useContext(UserContext)

    return (
        <>
            {context.user?.uid ?
                (
                    <div className="container-fluid px-5 my-5">
                        <Card />
                    </div>
                )
                :
                (<Redirect to='/' />)}
        </>

    )
}

export default Home
