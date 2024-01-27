import { useRef } from "react";

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()
    return (
        <div ref={modalRef} className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10">
            <button className="place-self-end bg-yellow-500 p-4 rounded-full" >X</button>
            <div className="mt-10 flex flex-col gap-5">

                <div>

                </div>
            </div>
        </div>
    );
};

export default Modal;