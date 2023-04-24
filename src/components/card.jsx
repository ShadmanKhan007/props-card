import React from 'react'
import './card.css'

const Card = (props) => {
  

    function buttonHandle() {
        alert(props.name)
    }


  return (
    <div class="container">
    <div class="cards">
       <div class="img">
        <img src={props.imgsrc} height="80px" width="80px" alt="images" class="profile" />
       </div>

       <h4 class="heading-1">{props.position}</h4>
       <h1 class="heading-2">{props.name}</h1>
       <p class="para">{props.description}</p>


        <button onClick={buttonHandle} class="btn">see more</button>
    </div>
    </div>
  )
}

export default Card;