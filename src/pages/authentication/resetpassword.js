import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./auth.css";


const ResetPassword = () => {

    const [check, setCheck] = useState(false);

    const handleSubmitt = (event) => {
      const formm = event.currentTarget;
      if (formm.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
  
      setCheck(false);
    };

    return (
        <>
            <section className="reset-pass-container">
                <Form className="reset-pass-form" noValidate validated={check} onSubmit={handleSubmitt}>
                    <header className="reset-pass-form-header">
                        <h2>Reset Password</h2>
                        <span>Enter the email address you signed up with to receive a secure link</span>
                    </header>
                    <Form.Group controlId="ResetPassword">
                        <Form.Label className="reset-pass-form-label">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" className="reset-pass-form-input" required/>
                        <Form.Control.Feedback type="invalid" className="reset-pass-err-msg">Please enter a valid email</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" className="reset-pass-btn">
                        Send Link
                    </Button>
                
                </Form>
                
            <aside className="reset-pass-aside">
                {/* <img */}
            </aside>
            </section>
        </>
    )
}

export {ResetPassword}
