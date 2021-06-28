
import React, { useState } from 'react';
import Header from './header';

class SetItem extends React.Component {

    constructor(){
        this.state = {}
    }

    render() {
        return (
            <div class="card">
                <div class="view zoom overlay z-depth-2 rounded">
                    <a href="#!">
                        <div class="mask">
                            <img class="img-fluid w-100"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"></img>
                            <div class="mask rgba-black-slight"></div>
                        </div>
                    </a>
                </div>

                <div class="text-center pt-4">

                    <h5>Food name</h5>
                    <button className="btn btn-outline-primary btn-sm my-2">view food</button>

                </div>

            </div>

        );

    }
}

class SetRow extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-4 mb-4"><SetItem />

                </div>

                <div class="col-md-4 mb-4"> <SetItem />

                </div>
                <div class="col-md-4 mb-4"><SetItem />
                </div>
            </div>

        );
    }
}



export default function Foods() {



    return (

        <div className="body">

            <Header />


            <div className="container my-5">

                <SetRow />
                <SetRow />
                <SetRow />




            </div>

        </div>

    );
}











