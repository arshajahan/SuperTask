import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './editModal.css'

function EditModal(props) {
    const [doc, setDoc] = useState({})

    useEffect(() => {
        setDoc((prev) => props.docdata);
    },[props])

    const handleChange = (e) => {
        const value = e.target.value;
        setDoc({...doc, [e.target.name]:value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSaveDoc(doc);
    }

  return (
    <div className='modal'>
        <div className='modal-content'>
            <form onSubmit={submitHandler} className='modal-form'>
                <span onClick={() => props.onCloseModal()} className='close'>X</span>
                <input 
                    type='text'
                    required
                    defaultValue={doc.name}
                    placeholder='Doctor Name'
                    name= 'name'
                    onChange = {e => handleChange(e)}
                />
                <input 
                    type='text'
                    defaultValue={doc.specs}
                    placeholder='Specialization'
                    name='specs'
                    onChange = {e => handleChange(e)}
                />
                <input 
                    type='text'
                    defaultValue={doc.qualification}
                    placeholder='qualifications'
                    name='qualification'
                    onChange = {e => handleChange(e)}
                />
                <button>Add</button>
            </form>
        </div>
    </div>
  )
}

export default EditModal;