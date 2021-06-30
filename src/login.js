import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import signup from './signup'
import Header from "./header"









function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateFormFields() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    let history = useHistory();







    return (

        <div className = "body bg-dark"  style={{ paddingBottom: "20%" }}>

            <Header />

        <div className='container my-5 ' style={{ padding: "10%" }}>
            

            <div className='row h-100 justify-content-center align-items-center'>
                <div className='col-10 col-md-8 col-lg-6'>
                    <form className="form-example" onSubmit={handleSubmit} action="" method="post">
                        <h4 className="text-center text-light">Login</h4>
                        <div className='form-group '>
                            <br></br>
                            <input type="text" className="form-control username my-2" id="email" placeholder="Email..." name="email" onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className='form-group input-group'>
                            <input type="password" className="form-control password" id="password" placeholder="Password..." name="password" onChange={e => setPassword(e.target.value)}></input>
                        </div>
                        <div class="d-grid gap-2 my-3">
                            <button type="button" className="btn btn-primary  btn-block" disabled={!validateFormFields()}>Login</button>
                        </div>
                        <br></br>

                        <br></br>
                        <p className="text-left text-light">dont have account! create one:</p>
                        <div class="d-grid gap-2">
                            <button type="button" className="btn btn-success  btn-block"  onClick={() => { history.push("/signup") }}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;



