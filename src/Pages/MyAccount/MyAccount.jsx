import React from 'react'
import HeaderContact from '../../Components/Header/HeaderContact'
import SectionMyAccount from '../../Components/AccountSections/SectionMyAccount'
import Footer from "../../Components/Footer/Footer"
import Register from "../Register/Register"
import Login from '../Login/Login'
const MyAccount = () => {
  return (
    <div>
        <HeaderContact/>
        <SectionMyAccount/>
        <Footer/>
    </div>
  )
}

export default MyAccount