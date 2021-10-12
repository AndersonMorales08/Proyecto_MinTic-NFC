import React from 'react'
import { NabBarLogin } from '../components/NabBarLogin'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'

export const UserInterface = () => {
    return (
        <>
        <NabBarLogin />
        <Caroussel />
        <FirstSection />
        <FooterSection />        
        </>
    )
}
