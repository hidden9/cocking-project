import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./header"


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get('https://shoppingapiacme.herokuapp.com/shopping')
            .then((res) => {
                // console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (



        <div className="body bg-dark" style = {{paddingBottom : "20%"}}>
            <Header />


            <div className='container my-4'  >
                <div className="card col-sm-12" >
                    <div className="card-header">
                        <div class="navbar navbar-light">
                            <h4 class="navbar-brand text-dark">ff</h4>
                            <form class="form-inline">

                                <Link to="/foods" className="btn btn-outline-success my-1 mr-sm-3">View all</Link>


                            </form>
                        </div>

                    </div>

                    <div className=' card-body row' >


                        {products.map((product) => (
                            <div className='card col-sm-4 justify-content-center align-items-center  my-3 mt-3' key={product.id} style={{ margin: " auto", width: "400px" }}>
                                <img className="my-3" src={product.image} alt='' />
                                <h3>{product.brand}</h3>
                                <p>{product.item}</p>
                                <div class="d-grid gap-2">
                                    <Link to={`/food/${product.id}`} type="button" className="btn btn-success  btn-block my-4" >View</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='container my-5 '>
                <div className="card col-sm-12" >
                    <div className="card-header">
                        <div class="navbar navbar-light">
                            <h4 class="navbar-brand text-dark">ff</h4>
                            <form class="form-inline">

                                <Link to="/foods" className="btn btn-outline-success my-1 mr-sm-3">View all</Link>


                            </form>
                        </div>

                    </div>

                    <div className='row' >


                        {products.map((product) => (
                            <div className='card col-sm-4 justify-content-center align-items-center  my-3 mt-3' key={product.id} style={{ margin: " auto", width: "400px" }}>
                                <img className="my-3" src={product.image} alt='' />
                                <h3>{product.brand}</h3>
                                <p>{product.item}</p>
                                <div class="d-grid gap-2">
                                    <Link to={`/food/${product.id}`} type="button" className="btn btn-success  btn-block my-4" >View</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Home;



