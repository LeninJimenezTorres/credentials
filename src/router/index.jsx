import React from 'react'
import {Route, Routes } from "react-router-dom";
import {
    Home,
    Engineering,
    Algorithms,
    Ccna,
    Hackmakers2022,
    HackmakersMention,
    Oci,
    ResponsiveDesign
} from "../pages/index"

function Router() {
    return (
        <Routes>
            <Route exact element={<Home/>} path="/"/>
            <Route exact element={<Engineering/>} path="/engineering"/>
            <Route exact element={<Algorithms/>} path="/algorithms"/>
            <Route exact element={<Ccna/>} path="/ccna"/>
            <Route exact element={<Hackmakers2022/>} path="/hackmakers2022"/>
            <Route exact element={<HackmakersMention/>} path="/hackmakershonorablemention"/>
            <Route exact element={<Oci/>} path="/oci"/>
            <Route exact element={<ResponsiveDesign/>} path="/responsivedesign"/>
        </Routes>
    )
}

export default Router