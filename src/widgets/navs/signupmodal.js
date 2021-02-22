import React from "react";
import {SignUp} from "../../pages";
import "../widgets.css";

const SignUpModal = ({modalIsOpen, setModalIsOpen}) => {
    return (
        <>
        {modalIsOpen ? (
            <section className="modal-background">
                <div className="modal-box" modalIsOpen={modalIsOpen}>
                    <SignUp/>
                    <button aria-label='Close modal' onClick={() => setModalIsOpen(prev => !prev)}>x</button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {SignUpModal}
