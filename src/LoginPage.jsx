import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ setUserData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log('Form Data:', data);
        setUserData(data); // Save the form data to state
        navigate('/ssn'); // Navigate to SSN page
    };

    return (
        <div className="login-container">
            <h1>Sensitive Data Scanner-LoginPage</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                    <label>Email ID:</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;
