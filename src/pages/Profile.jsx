function Profile() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Your Profile</h1>

      <div style={{ marginTop: '30px' }}>
        <h2>Welcome, User!</h2>

        <div style={{
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          maxWidth: '500px'
        }}>
          <h3>Account Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          maxWidth: '500px'
        }}>
          <h3>Uploaded Prescriptions</h3>
          <p>No prescriptions uploaded yet. (future feature)</p>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          maxWidth: '500px'
        }}>
          <h3>Past Orders</h3>
          <p>No past orders yet. (future feature)</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
