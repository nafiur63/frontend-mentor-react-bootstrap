import React from 'react'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import {data} from '../Components/datas'

const HomePage = () => {
    return (
        <>
            <NavigationBar/>
            <Banner />
            <Footer/>
        </>
    )
}

export default HomePage
