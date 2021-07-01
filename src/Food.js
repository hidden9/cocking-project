import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './header';

const Food = ({match}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchProduct();
    }, []);
    const fetchProduct = () => {
        axios
            .get(
                `http://localhost:8000/api/recipe/${match.params.id}`
            )
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        fetchAuthor();
    }, []);
    const fetchAuthor = () => {
        axios
            .get(
                `http://localhost:8000/api/recipe/author/${match.params.id}`
            )
            .then((res) => {
                setAuthor(res.data[0].name);
                // console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    const [likes, setLikes] = useState([]);
    useEffect(() => {
        fetchLikes();
    }, []);
    const fetchLikes = () => {
        axios
            .get(
                `http://localhost:8000/api/likes/${match.params.id}`
            )
            .then((res) => {
                console.log(res.data);
                if (res.data.length == 0) {
                    setLikes('0')
                } else {
                    setLikes(res.data[0].like_count);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="bg-dark">
            <Header/>
            {data.map((item) => {
                return (
                    <div className='container  ' key={item.id} style={{paddingBottom: "20%"}}>
                        <div className="row">


                            <div className="col-sm-6  mx-auto my-5">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active my-3">
                                            <img
                                                src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                                                class="d-block w-100" alt="..."
                                                style={{width: '400px', height: "400px"}}/>
                                        </div>
                                        <div class="carousel-item my-3">
                                            <img
                                                src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                                                class="d-block w-100" alt="..."
                                                style={{width: '400px', height: "400px"}}/>
                                        </div>
                                        <div class="carousel-item my-3">
                                            <img
                                                src={"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                                                class="d-block w-100" alt="..."
                                                style={{width: '400px', height: "400px"}}/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="text-light">Likes: {likes}</div>

                            <h1 className='brand my-5 text-light'>{item.name}</h1>
                            <h2 className="text-light">{item.item}</h2>
                            <p className="text-light">
                                <strong>Author: </strong><br/>{author}
                            </p>
                            <p className="text-light">
                                <strong>Ingredients: </strong><br/>{item.ingredients}
                            </p>
                            <p className="text-light">
                                <strong>Steps: </strong><br/> {item.steps}
                            </p>
                        </div>
                    </div>
                );
            })}

        </div>
    );
};
export default Food;