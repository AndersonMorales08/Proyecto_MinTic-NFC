import React, { useState, useEffect } from 'react'
import { UserPanel } from '../components/UserPanel'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'
import { VendorPanel } from '../components/VendorPanel'
import { consultarDatabase, auth } from '../components/firebaseconf'


export const UserDashBoard = () => {

    const [rol, setRol] = useState("");
    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(async () => {
    PanelRender()
    }, []);


    const datUser = async () => {
        const listaTemporal = await consultarDatabase('lista-usuarios')
        const datos = listaTemporal.map((usuario) => {
            const datosUser = { email: usuario.email, rol: usuario.rol }
            // listaUsuarios.push(datosUser)
            // console.log(listaUsuarios)
            return datosUser

        })
        listaUsuarios.push(datos)
        // console.log(listaUsuarios)
        return datos
    }

    const rolSelector = async () => {
        const usuarios = await datUser()
        // console.log(usuarios.length)
        const user = auth.currentUser;
        const correo = user.email
        console.log(correo)
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].email == correo) {
                setRol(usuarios[index].rol)
                console.log("entra: " + rol)
            }
            else {
                console.log("no coincide")
            }
        }
        return rol
    }


    const PanelRender = () => {
        rolSelector()
        let panel = <VendorPanel />
        if (rol == "Administrador") {
            panel = <UserPanel />
        }
        else {
            panel = <VendorPanel />
        }
        return panel
    }
    return (
        <>
            {PanelRender()}
            <Caroussel />
            <FirstSection />
            <FooterSection />
        </>
    )
}
