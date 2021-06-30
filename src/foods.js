import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';



const FeaturedFood = () => {
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
        <div className = " bg-dark">
            <Header />
            <div className='container my-4 ' style = {{paddingBottom : "20%"}}>
                <div className = 'row ' >

                
                        <div class="navbar navbar-light">
                            <h4 class="navbar-brand text-light">ff</h4>
                            <form class="form-inline">
                            </form>
                        </div>

                    
                    
                {products.map((product) => (
                    <div className='card justify-content-center align-items-center col-sm-4 my-3 ' key={product.id} style = {{padding : "20px" , margin : "5px auto" , width : "30%"}}>
                        <img className="my-3" src={product.image} alt='' />
                        <h3>{product.brand}</h3>
                        <p>{product.item}</p>
                        <Link to={`/food/${product.id}`} className = "btn btn-success my-4">View</Link>
                    </div>
                ))}
            </div>
            
            </div>
        </div>
    );
};
export default FeaturedFood;