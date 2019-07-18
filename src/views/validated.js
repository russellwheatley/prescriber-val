import React from "react";

class Validated extends React.Component {

    render(){
        return ( 
            <div>
                <div className='validated-container jumbotron'>
                    <div className='validated-contents text-center'>
                        <h1 className='text-success'>Approved!</h1>
                        <br/>
                        <p className='text-body'> The prescription can now be passed on to the Pharmacist </p>
                        <br/>
                        <a className='btn btn-primary text-white' href='/index'>New prescription</a>
                    </div>
                </div>
            </div>
        );
    }

}
export default Validated;