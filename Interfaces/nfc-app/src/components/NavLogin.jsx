import React from 'react'
import { BarLogin } from './BarLogin'

export const NavLogin = () => {
    return (
        <>
        <nav className="navbar navbar-expand-xl fixed-top bg-dark navbar-dark">
                <div className="container-fluid">
                    <div><img className="logo" src="Sources/NFC logo.png" alt="" srcSet="" /></div>
                    <a className="navbar-brand ps-3" href="/#">NFC Motors</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <BarLogin />
                    </div>
                </div>

            </nav>
            
        </>
    )
}
