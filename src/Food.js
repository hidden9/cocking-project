import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';

const Food = ({ match }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchProduct();
    }, []);
    const fetchProduct = () => {
        axios
            .get(
                `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className = "bg-dark" >
            <Header />
            {data.map((item) => {
                return (
                    <div className='container  ' key={item.id} style = {{paddingBottom : "20%"}} >
                        <div className="row" >


                            <div className="col-sm-6  mx-auto my-5" >
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active my-3">
                                            <img src={item.image} class="d-block w-100" alt="..." style={{ width: '400px', height: "400px" }} />
                                        </div>
                                        <div class="carousel-item my-3">
                                            <img src={item.image} class="d-block w-100" alt="..." style={{ width: '400px', height: "400px" }} />
                                        </div>
                                        <div class="carousel-item my-3">
                                            <img src={item.image} class="d-block w-100" alt="..." style={{ width: '400px', height: "400px" }} />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h1 className='brand my-5 text-light'>{item.brand}</h1>
                            <h2 className = "text-light">{item.item}</h2>
                            <p className = "text-light">{item.description}</p>
                            <p className = "text-light">
                                <strong >Price:</strong> {item.price}
                            </p>
                            <p className = "text-light">
                                <strong>Color:</strong> {item.color}
                            </p>
                        </div>
                    </div>
                );
            })}

        </div>
    );
};
export default Food;