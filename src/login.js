import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Login from './login'

import { button } from 'reactstrap'





export default function SignUp() {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confimation, setPassword_confimation] = useState("");

    const [name, setName] = useState("");


    let sendData = () => {
        axios.post('localhost:8000/api/register', { email,name, password, password_confimation })
            .then(res => console.log('Data send'))
            .catch(err => console.log(err.data))
    }



    function validateFormFields() {
        return email.length > 0 && password.length > 0 && name.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }





    let history = useHistory();

    return (
        <div className="body bg-dark" style={{ paddingBottom: "20%" }}>
            <div className='container  ' style={{ padding: "10%" }}>
                <h4 className="text-center text-light">Sign up</h4>
                <br></br>
                <div className='row h-100 justify-content-center align-items-center'>


                    <form onSubmit={handleSubmit}>
                        <div className="form-row ">
                            <div className="form-group col-lg-12 my-3">

                                <input type="name" className="form-control" id="inputname4" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div class="form-group col-lg-12 my-3">

                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div class="form-group col-lg-12 my-3">

                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" ></input>
                            </div>
                            <div class="form-group col-lg-12 my-3">

                                <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password"  onChange={e => setPassword(e.target.value)}  ></input>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div class="d-grid gap-2">
                                <button type="button" className="btn btn-success  btn-block" disabled={!validateFormFields()} onClick={() => { history.push("/") }} onChange={sendData}>Sign up</button>
                            </div>




                        </div>
                    </form>

                </div>



            </div>
        </div>

    );
}

