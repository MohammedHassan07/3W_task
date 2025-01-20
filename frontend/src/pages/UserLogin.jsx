import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError("Both fields are required!")
            return
        }

        setError("") 
        const res = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const response = await res.json()
        if (response.status !== 200) {
            setError(response.message)
            return
        }

        console.log(response)
        const token = response.data.token
        localStorage.setItem('token', token)
        navigate('/form-submission')

    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">User Login</h3>
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserLogin
