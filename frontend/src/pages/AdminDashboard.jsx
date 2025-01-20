import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:3000/admin/get-users', {
          method: 'GET',
          headers: {
            'token': `${localStorage.getItem('token')}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  function openImage(image) {
    location.href = image
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {users.map((user) => (
          <div key={user._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Social Media Handle:</strong> {user.socialMediaHandle}
                </p>

                <div>
                  <h6>Images:</h6>
                  <div className="d-flex flex-wrap">
                    {user.images.map((image, index) => (
                      <img
                        key={index}
                        className="img-thumbnail"
                        src={`http://localhost:3000/${image}`}
                        alt={`User ${user.name} image ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
                      onClick={() => {openImage(`http://localhost:3000/${image}`)}}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
