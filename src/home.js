import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./header"


const Home = () => {
    const [recent, setRecent] = useState([]);
    useEffect(() => {
        fetchRecent();
    }, []);
    const fetchRecent = () => {
        axios
            .get('http://localhost:8000/api/recent')
            .then((res) => {
                // console.log(res);
                setRecent(res.data.slice(0, 6));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = () => {
        axios
            .get('http://localhost:8000/api/popular')
            .then((res) => {
                // console.log(res);
                setPopular(res.data.slice(0, 6));
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
                            <h4 class="navbar-brand text-dark">Recent Recipes</h4>
                            <form class="form-inline">

                                <Link to="/foods/recent" className="btn btn-outline-success my-1 mr-sm-3">View all</Link>


                            </form>
                        </div>

                    </div>

                    <div className=' card-body row' >


                        {recent.map((recipe) => (
                            <div className='card col-sm-4 justify-content-center align-items-center  my-3 mt-3' key={recipe.id} style={{ margin: " auto", width: "400px" }}>
                                <img className="my-3" src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt='' />
                                <h3>{recipe.name}</h3>
                                <div class="d-grid gap-2">
                                    <Link to={`/food/${recipe.id}`} type="button" className="btn btn-success  btn-block my-4" >View</Link>
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
                            <h4 class="navbar-brand text-dark">Popular Recipes</h4>
                            <form class="form-inline">

                                <Link to="/foods/popular" className="btn btn-outline-success my-1 mr-sm-3">View all</Link>


                            </form>
                        </div>

                    </div>

                    <div className='row' >


                        {popular.map((recipe) => (
                            <div className='card col-sm-4 justify-content-center align-items-center  my-3 mt-3' key={recipe.id} style={{ margin: " auto", width: "400px" }}>
                                <img className="my-3" src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt='' />
                                <h3>{recipe.name}</h3>
                                <div class="d-grid gap-2">
                                    <Link to={`/food/${recipe.id}`} type="button" className="btn btn-success  btn-block my-4" >View</Link>
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



