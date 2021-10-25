import React from 'react'
import { NavBar } from '../components/NavBar'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'


export const Home = () => {
    return (
        <>
            <NavBar/>
            <Caroussel/>
            <FirstSection id="vehiculos" />
            <FooterSection id="nosotros" />
        </>
    )
}
