import React, { useState } from "react"

const FormSubmission = () => {
    const [name, setName] = useState("")
    const [handle, setHandle] = useState("")
    const [images, setImages] = useState([])
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleImageChange = (e) => {
        const files = e.target.files
        setImages([...files])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !handle || images.length === 0) {
            setError("All fields are required!")
            return
        }

        setError("") 
        setSuccessMessage("") 
        const formData = new FormData()
        formData.append("name", name)
        formData.append("socialMediaHandle", handle)

        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i])
        }

        try {
          
            const res = await fetch('http://localhost:3000/user/upload-data', {
                
                method: 'POST',
                headers: {
                    'token': localStorage.getItem('token')
                },
                body: formData
            })

            const response = await res.json()
            console.log(response)
            // setSuccessMessage(response)
        } catch (error) {
            setError("Failed to upload data. Please try again.")
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center ">
            <div className="card p-4 shadow-lg w-75" style={{ maxWidth: "500px", marginTop: "50px" }}>
                <h3 className="text-center mb-4">User Form</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}

                <form onSubmit={handleSubmit}>

                    <div className="form-group mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="handle">Social Media Handle</label>
                        <input
                            type="text"
                            id="handle"
                            className="form-control"
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                            placeholder="Enter your social media handle"
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="images">Select Images</label>
                        <input
                            type="file"
                            id="images"
                            className="form-control"
                            multiple
                            onChange={handleImageChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormSubmission
