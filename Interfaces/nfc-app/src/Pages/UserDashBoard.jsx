import React from 'react'
import { UserPanel } from '../components/UserPanel'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'



export const UserDashBoard = () => {
    return (
        <>
            <UserPanel />
            <Caroussel />
            <FirstSection />
            <FooterSection />
        </>
    )
}
