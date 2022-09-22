import React from "react"
import styled from "styled-components"
import App from "../App";


const StyledElementTask = styled.div`
  .elementTask{
    padding: 20px;
    background-color: rgb(219, 219, 219);
    margin: 0 auto;
    border: 5px solid black;
    border-radius: 30px;
    max-width: 700px;
    min-height: 400px;
    
  }
`

const ElementTask = () =>{
    return(
        <StyledElementTask>
            <div className='elementTask'>
                ввввввввввввввв
            </div>
        </StyledElementTask>

    )
}

export default ElementTask