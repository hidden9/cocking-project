import React, { useState } from 'react';
import Header from './header';

import "./food.css"



function Setlevels(event) {


    const [levels, setLevels] = useState("");


    return levels = setLevels(event.target.value)

}

function SetInformation(event) {


    const [information, setInformation] = useState("");



    return (information = setInformation(event.target.value));

}


class SetImgs extends React.Component {
    render() {
        return (
            <div class="col-md-6 my-1">
                <section >
                    <div id="mdb-lightbox-ui"></div>
                    <div class="mdb-lightbox">
                        <div class="row my-2">
                            <div class="col-8 ">
                                <figure class="view overlay rounded z-depth-1 ">
                                    <a href=""><img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="img-fluid z-depth-1" alt="Card image cap"></img></a>
                                </figure>

                            </div>
                            <div class="col-8 mb-0">
                                <div class="row">
                                    <div class="col-3">
                                        <div class="view overlay rounded z-depth-1 gallery-item hoverable">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="img-fluid" alt="Card image cap"></img>
                                            <div class="img-fluid z-depth-1"></div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="view overlay rounded z-depth-1 gallery-item hoverable">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="img-fluid" alt="Card image cap"></img>
                                            <div class="img-fluid z-depth-1"></div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="view overlay rounded z-depth-1 gallery-item hoverable">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="img-fluid" alt="Card image cap"></img>
                                            <div class="img-fluid z-depth-1"></div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="view overlay rounded z-depth-1 gallery-item hoverable">
                                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="img-fluid" alt="Card image cap"></img>
                                            <div class="img-fluid z-depth-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        );
    }
}

class SetTexts extends React.Component {
    render() {
        return (
            <div class="col-md-6 my-5">

                <div className="materials">
                    <h4 class="pro-d-title text-dark">
                        
                            Materials :
                        
                    </h4>
                    <p>
                        <p>{e => SetInformation(e.target.value)}</p>
                    </p>
                </div>
                <div class="product_meta">

                    <div className="level">
                        <h4 class="pro-d-title text-dark">
                            
                                Levels :
                            
                        </h4>

                        <p>
                            {e => Setlevels(e.target.value)}
                        </p>

                    </div>


                </div>


            </div>

        );
    }
}


export default function Food() {

    return (


        <div className='body bg-light' >


            <Header />
            <div class="container ">

                <div class="row">

                    < SetImgs />
                    < SetTexts />


                </div>


            </div>

        </div>


    );


}


