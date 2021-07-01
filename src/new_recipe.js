import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import App from "./App";


function New_recipe() {

    const [name, setName] = useState("");
    const [steps, setSteps] = useState("");
    const [ingredients, setIngredients] = useState("");


    let sendData = () => {
        console.log("ASDASDASDASD")
        axios.post('http://localhost:8000/api/new_recipe', {name, steps, ingredients}, {
            headers: {'Authorization': 'Bearer ' + App.user["api_token"]}
        })
            .then(res => console.log('Data send ', res))
            .catch(err => console.log(err.data))
    }


    return (


        <div className="body bg-dark" style={{paddingBottom: "20%"}}>

            <Header/>

            <div className="container my-5">

                <div class="input-group my-5">
                    <span class="input-group-text">name</span>
                    <input type={"text"} class="form-control" aria-label="With textarea" onChange={e => setName(e.target.value)}
                              style={{paddingBottom: '12px'}}></input>
                </div>

                <div className="input-group my-5">
                    <span className="input-group-text">ingeridients</span>
                    <textarea className="form-control" aria-label="With textarea"
                              onChange={e => setIngredients(e.target.value)}
                              style={{paddingBottom: '120px'}}></textarea>
                </div>


                <div class="input-group my-5">
                    <span class="input-group-text">steps</span>
                    <textarea class="form-control" aria-label="With textarea" onChange={e => setSteps(e.target.value)}
                              style={{paddingBottom: '200px'}}></textarea>
                </div>



                <div class="d-grid gap-2 my-3">
                    <Link to="/" type="button" className="btn btn-primary  btn-block" onClick={sendData}>Submit</Link>
                </div>


            </div>


        </div>);


}

export default New_recipe;