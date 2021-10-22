import React from 'react'
import { NavLogin } from '../components/NavLogin'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'

export const UserDashBoard = () => {
    return (
        <>
            <NavLogin />
            <Caroussel />
            <FirstSection />
            <FooterSection />
        </>
    )
}
