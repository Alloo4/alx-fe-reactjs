import { useState } from 'react';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    publicProfile: true,
    twoFactorAuth: false
  });

  const handleSettingChange = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    // Simulate saving settings
    alert('Settings saved successfully!');
    console.log('Saved settings:', settings);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profile Settings</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Privacy Settings</h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-gray-700">Public Profile</label>
                <p className="text-sm text-gray-600">Make your profile visible to other users</p>
              </div>
              <button
                onClick={() => handleSettingChange('publicProfile')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.publicProfile ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.publicProfile ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-gray-700">Two-Factor Authentication</label>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <button
                onClick={() => handleSettingChange('twoFactorAuth')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Notification Settings</h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-gray-700">Push Notifications</label>
                <p className="text-sm text-gray-600">Receive notifications in your browser</p>
              </div>
              <button
                onClick={() => handleSettingChange('notifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-gray-700">Email Updates</label>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <button
                onClick={() => handleSettingChange('emailUpdates')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailUpdates ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailUpdates ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;

