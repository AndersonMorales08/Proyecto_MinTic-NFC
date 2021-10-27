import React, { useState, useEffect } from 'react'
import { UserPanel } from '../components/UserPanel'
import { Caroussel } from '../components/Caroussel'
import { FirstSection } from '../components/FirstSection'
import { FooterSection } from '../components/FooterSection'
import { VendorPanel } from '../components/VendorPanel'
import { consultarDatabase, loginUsuario, emailUsuario } from '../components/firebaseconf'



export const UserDashBoard = () => {

    const [rol, setRol] = useState("");
    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(async () => {
        emailUsuario()
        datUser()
        encontrarUsuario()
    }, []);

    useEffect( async () => {
        const a = await encontrarUsuario()
        PanelRender()
    },);

    const datUser = async () => {
        const listaTemporal = await consultarDatabase('lista-usuarios')
        const datos = listaTemporal.map((usuario) => {
            const datosUser = { email: usuario.email, rol: usuario.rol }
            return datosUser
        })
        setListaUsuarios(datos)
        return datos
    }

    const encontrarUsuario = async () => {
        const correo = await emailUsuario()
        for (let index = 0; index < listaUsuarios.length; index++) {
            if (listaUsuarios[index].email === correo) {
                console.log(listaUsuarios[index].rol)
                setRol(listaUsuarios[index].rol)
            }
            else {
                console.log("no coincide")
            }
        }
    }


    const PanelRender = () => {
        let panel = <UserPanel />
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
