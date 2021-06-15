import { useRef } from "react";

export default function Modal(props) {
    const modal = useRef(null)

    function closeModal() {
        modal.current.style.display = "none";
    }
    function openModal() {
        modal.current.style.display = "block";
    }
    return (
        <div>
            <button onClick={() => openModal()} className={props.warning ? ("btn btn-warning"):("btn btn-primary")}>
                {props.buttonText}
            </button>

            <div className="modal" ref={modal}>
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
            <style>{`
       .modal {
        color:var(--bg-primary);
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    }
    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 2%;
        border: 1px solid #888;
        width: 60%;
    }
    /* The Close Button */
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
      `}</style>
        </div>
    )
}