import React from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import LoginPage from "../Scenes/LoginPage";
import RootRoute from "./RootRouter";
import {useSelector} from "react-redux";
import {isLoggedIn} from "store/selectors/userSelectors";


const LoginRoute  = (props) => {
    const userLoggedIn = useSelector(isLoggedIn);

    const renderForNotLoggedUser = (Scene) => {
        if (!userLoggedIn) return Scene
        return <Navigate to={"/main"}/>
    }

    const renderForLoggedUser = (Scene) => {
        if (userLoggedIn) return Scene
        return <Navigate to={"/login"}/>
    }

    return (
        <Routes>
            <Route path={"/login"} element={renderForNotLoggedUser(<LoginPage/>)}/>
            <Route path={"*"} element={renderForLoggedUser(<RootRoute/>)}/>
        </Routes>
    )
}

export default LoginRoute