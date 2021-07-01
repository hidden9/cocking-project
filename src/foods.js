import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './header';


const FeaturedFood = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get('http://localhost:8000/api/' + props.match.params['0'])
            .then((res) => {
                // console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className=" bg-dark">
            <Header/>
            <div className='container my-4 ' style={{paddingBottom: "20%"}}>
                <div className='row '>


                    <div class="navbar navbar-light">
                        <h4 class="navbar-brand text-light">{props.match.params['0'] === 'popular' ? 'Popular Recipes' : 'Recent Recipes'}</h4>
                        <form class="form-inline">
                        </form>
                    </div>


                    {products.map((product) => (
                        <div className='card justify-content-center align-items-center col-sm-4 my-3 ' key={product.id}
                             style={{padding: "20px", margin: "5px auto", width: "30%"}}>
                            <img className="my-3"
                                 src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                                 alt=''/>
                            <h3>{product.name}</h3>
                            <Link to={`/food/${product.id}`} className="btn btn-success my-4">View</Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
export default FeaturedFood;