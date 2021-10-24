import React from 'react'
import { NavBar } from '../components/NavBar'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'


export const UserDashBoard = () => {
    return (
        <>
            <NavBar />
            <Caroussel />
            <FirstSection />
        </>
    )
}
