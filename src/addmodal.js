import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from './features/todoSlice';

function AddModal({ showaddmodal, handlecloseaddmodal, selectedData }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");

    const dispatch = useDispatch();

    
    useEffect(() => {
        if (selectedData) {
            setId(selectedData.id || ""); 
            setName(selectedData.name || ""); 
            setEmail(selectedData.email || ""); 
            setContactNo(selectedData.contactNo || ""); 
        } else {
            setId("");
            setName("");
            setEmail("");
            setContactNo("");
        }
    }, [selectedData]);

    const saveData = () => {
        const newData = { id: id || new Date().getTime(), name, email, contactNo };
        console.log(newData);
        
        if (selectedData && selectedData.id) {
            dispatch(editTodo(newData));
        } else {
            dispatch(addTodo(newData));
        }
        handlecloseaddmodal();
    };

    return (
        <div>
            <div className={`modal fade ${showaddmodal ? 'show d-block' : ''}`} id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showaddmodal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{selectedData ? 'Edit Details' : 'Add Details'}</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type='hidden' id="id" value={id} />
                                <div className='form-group'>
                                    <label htmlFor="name" className='col-form-label'>Name:</label>
                                    <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="email" className='col-form-label'>Email:</label>
                                    <input type='text' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="contactNo" className='col-form-label'>Contact No:</label>
                                    <input type='text' className='form-control' id='contactNo' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handlecloseaddmodal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={saveData}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;
