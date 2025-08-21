const ProfileDetails = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for React and modern web technologies.',
    joinDate: 'January 2023',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev'
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profile Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{user.name}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{user.email}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{user.location}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Member Since
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{user.joinDate}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">
              <a 
                href={user.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {user.website}
              </a>
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

