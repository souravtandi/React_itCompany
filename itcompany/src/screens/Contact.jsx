
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Contact() {

    const [name, setName ] = useState("");
    const [contact, setContact] = useState();
    const [email, setEmail] = useState()
    const [query, setQuery ] = useState("");
    const navigate = useNavigate();

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(name);
        console.log(contact);
        console.log(email);
        console.log(query);
        navigate({ pathname: '/' });
    }

  return (
    <div className='container'>
            <h3 className='text-center text-uppercase pt-4 text-decoration-underline'>Contact us</h3>
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(event)=>submitForm(event)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Fullname</label>
                        <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact no.</label>
                        <input onChange={(event)=>setContact(event.target.value)} type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="email" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="timing" className="form-label">When can we reach you?</label>
                        <select className="form-select" id="timing">
                            <option defaultValue="">Best time to reach</option>
                            <option value="M">Morning</option>
                            <option value="A">Afternoon</option>
                            <option value="E">Evening</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="query" className="form-label">Enter your query below</label>
                        <textarea onChange={(event)=>setQuery(event.target.value)} className="form-control" id="query" required></textarea>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
  )
}

export default Contact