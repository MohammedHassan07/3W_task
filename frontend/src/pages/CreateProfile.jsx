import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function signin() {
        navigate('/');
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }

        setError("");
        
        const res = await fetch('http://localhost:3000/user/create-profile', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const response = await res.json();
        if (response.status !== 201) {
            setError(response.message);
            return;
        }

        console.log(response);
        navigate('/'); 
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div
                className="card p-4 shadow-lg"
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    minHeight: "400px", // Adjusting the height of the card
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h3 className="text-center mb-4">
                    Create Profile Login
                </h3>
                {error && <div className="alert alert-danger text-center">{error}</div>}



                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        User Login
                    </button>

                    <p onClick={signin} style={{ cursor: 'pointer', textAlign: 'center' }}>Don’t have an account? Sign Up</p>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
