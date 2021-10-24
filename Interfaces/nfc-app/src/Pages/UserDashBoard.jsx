import React from 'react'
import { NavBar } from '../components/NavBar'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'

export const UserDashBoard = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Caroussel />
            <FirstSection />
            <FooterSection />
        </>
    )
}
