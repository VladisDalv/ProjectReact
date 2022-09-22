import React from "react"
import styled from "styled-components"


const StyledMainLayout = styled.div`
  
  .header {
    height: 40px;
    width: 100%;
    background-color: ${props => props.theme.accentBackgroundColor};
  }
  
  .content{
    background-color:${props => props.theme.baseBackgroundColor};
    height: calc(100vh - 40px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer{
    height: 20px;
    width: 100%;
    background-color: ${props => props.theme.accentBackgroundColor};
  }
`

const MainLayout = (props) =>{
return(

  <StyledMainLayout>
    <header className="header">
    </header>
    <main className="content">
      {props.children}
    </main>
    <footer className="footer">
    </footer>
  </StyledMainLayout>
)
  
}
export default MainLayout;