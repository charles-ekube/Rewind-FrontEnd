import React from "react";
import {SignIn} from "../../pages";
import "../widgets.css";

const SignInModal = ({signinmodalIsOpen, setSigninModalIsOpen}) => {
    return (
        <>
        {signinmodalIsOpen ? (
            <section className="modal-background">
                <div className="modal-box" signinmodalIsOpen={signinmodalIsOpen}>
                    <SignIn/>
                    <button aria-label='Close modal' onClick={() => setSigninModalIsOpen(prev => !prev)}>x</button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {SignInModal}
