const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
            <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;

