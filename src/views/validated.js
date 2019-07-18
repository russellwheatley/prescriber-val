import React from "react";

class Validated extends React.Component {

    render(){
        return ( 
            <div className='validated'>
                <div className='validated-container jumbotron'>
                    <div className='validated-contents text-center'>
                        <h1 className='text-success display-4'>Approved!</h1>
                        <hr className='hr-4'></hr>
                        <p className='text-body'> The prescription can now be passed on to the Pharmacist </p>
                        <br/>
                        <a className='btn btn-primary text-white' href='/'>New prescription</a>
                    </div>
                </div>
            </div>
        );
    }

}
export default Validated;