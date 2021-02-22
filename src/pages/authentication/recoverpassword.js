import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./auth.css";


const RecoverPassword = () => {

    const [validatedd, setValidatedd] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
  
      setValidatedd(false);
    };

    return (
        <>
            <section className="sign-in-container">
                <Form className="sign-in-form" noValidate validated={validatedd} onSubmit={handleSubmit}>
                    <header className="sign-in-form-header">
                        <h2>Sign In</h2>
                        <span>Welcome, we missed you!</span>
                    </header>
                    <Form.Group controlId="RecoverPassword">
                        <Form.Label className="sign-in-form-label">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" className="sign-in-form-input" required/>
                        <Form.Control.Feedback type="invalid" className="sign-in-err-msg">Please enter username</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="confirmRecoverPassword">
                        <Form.Label className="sign-up-form-label">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" className="sign-in-form-input" required/>
                        <Form.Control.Feedback type="invalid" className="sign-in-err-msg">Please enter password</Form.Control.Feedback>
                    </Form.Group>
                  
                    <Button type="submit" className="sign-in-btn">
                        Sign In
                    </Button>
                
                </Form>
                
            <aside className="sign-in-aside">
                {/* <img */}
            </aside>
            </section>
        </>
    )
}

export {RecoverPassword}
