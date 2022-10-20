import React from "react"
import styled from "styled-components"

const StyledElementTask = styled.div`
  .elementTask{
    padding: 20px;
    background-color: rgb(219, 219, 219);
    margin: 0 auto;
    border: 5px solid black;
    border-radius: 30px;
    width: 700px;
    min-height: 100px;
    
  }
`

const ElementTask = (props) =>{
    return(
        <StyledElementTask>
            <div className='elementTask'>
                <input />
                    <button type={"button"}>add a task</button>
            </div>
        </StyledElementTask>

    )
}

export default ElementTask

