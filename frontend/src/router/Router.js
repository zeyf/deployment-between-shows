import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../screens/Login'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import Cartoon from '../screens/Cartoon'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Landing from '../screens/Landing'
import Error from '../screens/Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route exact path="/login" element={<LogIn />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>
                <Route exact path="/cartoons" element={<Home />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/cartoons/:id" element={<Cartoon />}></Route>
                <Route exact path="/user/:id" element={<Profile />}></Route>
                <Route path="/cartoons/search" element={<Search />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router