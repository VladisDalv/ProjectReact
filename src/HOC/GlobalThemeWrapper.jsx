import React from "react";
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`
const GlobalThemeWrapper = (props) => {
    return (
        <ThemeProvider theme={{accentBackgroundColor: 'cadetblue', baseBackgroundColor: 'SlateGray', partBackgroundColor: 'Wite'}}>
            <React.Fragment>
            <   GlobalStyle/>
                {props.children}
            </React.Fragment>
        </ThemeProvider>
        
    )
}

export default GlobalThemeWrapper