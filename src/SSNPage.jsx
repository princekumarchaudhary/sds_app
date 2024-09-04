import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './SSNPage.css';

function SSNPage({ userData, setUserData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        setUserData({ ...userData, ssn: data.ssn }); // Save SSN to existing data
        setSubmitted(true); // Set submitted to true to display data
    };

    return (
        <div className="login-container">
            <h1>Sensitive Data Scanner</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label>SSN:</label>
                        <input
                            type="text"
                            {...register('ssn', { required: 'SSN is required' })}
                        />
                        {errors.ssn && <p className="error-message">{errors.ssn.message}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="result-data">
                    <h2>User Data</h2>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Password:</strong> {userData.password}</p>
                    <p><strong>SSN:</strong> {userData.ssn}</p>
                </div>
            )}
        </div>
    );
}

export default SSNPage;
