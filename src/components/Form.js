import React from 'react';
import audiLogo from '../img/logo.svg';
import TextField from '@material-ui/core/TextField';



const Form = () => {
    return (
        <div className="form-bg">
            <img className="logo" src={audiLogo} alt="Audi" />
            <h1 className="heading">0-60 in<br />3 seconds.</h1>
            <p>Sign up to test drive the all new <span style={{ color: '#BB0A30', fontWeight: 'bold' }}>R8</span>.</p>
            <TextField
                id="standard-name"
                label="Full Name"
                type="text"
                margin="normal"
            />
            <TextField
                id="standard-email"
                label="Email Address"
                type="email"
                margin="normal"
            />
        </div>
    );
}

export default Form;