import React from "react";
import {Routes, Route} from "react-router-dom"
import TodoList from "../Сomponents/TodoList";
import MainLayout from "../Layouts/MainLayouts";

const  RootRoute = (props) => {
        return (
            <Routes>
                <Route path={"/"} render={<MainLayout/>}></Route>
            </Routes>
        );
}

export default RootRoute
