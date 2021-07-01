import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';





function New_recipe() {

    const [name, setName] = useState("");
    const [steps, setSteps] = useState("");
    const [ingeridients, setIngeridients] = useState("");



    let sendData = () => {
        axios.post('localhost:8000/api/register', { name, steps, ingeridients })
            .then(res => console.log('Data send'))
            .catch(err => console.log(err.data))
    }






    return (



        <div className="body bg-dark" style={{ paddingBottom: "20%" }}>

            <Header />

            <div className="container my-5" >

                <div class="input-group my-5">
                    <span class="input-group-text">name</span>
                    <textarea class="form-control" aria-label="With textarea" onChange={e => setName(e.target.value)} style={{ paddingBottom: '12px' }}></textarea>
                </div>


                <div class="input-group my-5">
                    <span class="input-group-text">steps</span>
                    <textarea class="form-control" aria-label="With textarea" onChange={e => setSteps(e.target.value)} style={{ paddingBottom: '200px' }}></textarea>
                </div>


                <div class="input-group my-5">
                    <span class="input-group-text">ingeridients</span>
                    <textarea class="form-control" aria-label="With textarea" onChange={e => setIngeridients(e.target.value)} style={{ paddingBottom: '120px' }}></textarea>
                </div>



                <div class="d-grid gap-2 my-3">
                    <Link to="/" type="button" className="btn btn-primary  btn-block" onClick={sendData}  >Submit</Link>
                </div>



            </div>


        </div>);



}

export default New_recipe;