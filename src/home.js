import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Header from './header';


class SetCard extends React.Component {


    render() {

        return (

            <div className="card" style={{ width: "100%" }}>




                <div className="card bg-light" style={{ width: "18rem;", height: "18rem", padding: "10px" }}>

                    <img className="card-img-top" src="..." alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick </p>
                        <a href="#" className="btn btn-primary btn-sm" style={{ marginBottom: "10px" }}>view</a>
                    </div>

                </div>
            </div>

        );
    }
}


class SetBigCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {HeaderLabel : ""}


    }


    
    render() {

        let history = useHistory();

        
        
        return (

            <div className="card">

                <div className="card-header" style={{ backgroundColor: "#fae978" }}>
                    <div class="navbar navbar-light">
                        <a class="navbar-brand text-dark">{this.props.HeaderLabel}</a>
                        <form class="form-inline">
                            <button class="btn btn-outline-success my-1 mr-sm-3 " type="submit" onClick = {history.push('/foods')} >view all</button>

                        </form>
                    </div>
                </div>


                <div className="card-body">


                    <div className='row' style={{ margin: "10px 10px" }}>



                        <div className='col-sm-4' >
                            <SetCard />
                            <SetCard />
                        </div>

                        <div className='col-sm-4'>
                            <SetCard />
                            <SetCard />
                        </div>

                        <div className='col-sm-4'>
                            <SetCard />
                            <SetCard />
                        </div>

                    </div>
                </div>

            </div>




        );
    }
}

export default function Home() {
    
    return (


        <div className='body bg-light'>

            <Header />

            <div className='container my-4 ' >

                < SetBigCard HeaderLabel = "Newest Foods"   />
                < SetBigCard HeaderLabel = "Most popular foods" style={{ marginTop: "30px" }} />


            </div>
        </div>

    );



}
/*
<div className="card-header" style={{ backgroundColor: "#fae978" }}>
<div class="navbar navbar-light">
    <a class="navbar-brand text-dark">Newest food</a>
    <form class="form-inline">
        <button class="btn btn-outline-success my-1 mr-sm-3 " type="submit">view all</button>

    </form>
</div>
</div>

*/