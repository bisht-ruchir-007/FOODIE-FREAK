import React from 'react';
import img2 from './img2.jpeg';
import img3 from './img3.jpg';
const Ruchir = ()=>{
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src={img3} class="w-10 " alt="..."/>
          </div>
          <div class="carousel-item" data-interval="2000">
            <img src={img2} class="w-10" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Ruchir;