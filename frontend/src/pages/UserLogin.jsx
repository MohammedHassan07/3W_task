import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isAdmin, setIsAdmin] = useState(false) // state to toggle between user and admin login
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError("Both fields are required!")
            return
        }

        setError("") 
        const url = isAdmin ? 'http://localhost:3000/admin/login' : 'http://localhost:3000/user/login'

        const res = await fetch(url, {
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
        navigate('/form-submission') // Redirect to the appropriate page
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">
                    {isAdmin ? 'Admin Login' : 'User Login'}
                </h3>
                {error && <div className="alert alert-danger text-center">{error}</div>}
                
                <div className="form-group mb-3 d-flex align-items-center">
                    <label htmlFor="adminSwitch" className="mr-2">Admin Login</label>
                    <input
                        type="checkbox"
                        id="adminSwitch"
                        className="form-check-input"
                        checked={isAdmin}
                        onChange={() => setIsAdmin(!isAdmin)}
                    />
                </div>

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
                        {isAdmin ? 'Admin Login' : 'User Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserLogin
