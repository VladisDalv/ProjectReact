import React, {useState} from "react";
import MainLayout from "./Layouts/MainLayouts";
import GlobalThemeWrapper from "./HOC/GlobalThemeWrapper";
import Login from "./Scenes/Login";
import ElementTask from "./Сomponents/ElementTask";

const App = (props) => {

    return(
        <GlobalThemeWrapper>

            <MainLayout>
                <ElementTask/>
                {/*<Login/>*/}
            </MainLayout>
        </GlobalThemeWrapper>
    )
};


export default App

