import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.jsx';
import './App.css';

function App() {
  const [activeForm, setActiveForm] = useState('controlled');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Form Handling in React
        </h1>
        
        {/* Form Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveForm('controlled')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeForm === 'controlled'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Controlled Components
            </button>
            <button
              onClick={() => setActiveForm('formik')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeForm === 'formik'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Formik
            </button>
          </div>
        </div>

        {/* Form Display */}
        <div className="transition-all duration-300">
          {activeForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
        </div>

        {/* Information Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Form Handling Approaches
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Controlled Components
                </h3>
                <p className="text-gray-600">
                  Uses React's useState to manage form state manually. Provides full control 
                  over form data and validation logic. Requires more boilerplate code but 
                  offers maximum flexibility.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">
                  Formik
                </h3>
                <p className="text-gray-600">
                  A popular form library that simplifies form handling with built-in state 
                  management, validation (using Yup), and error handling. Reduces boilerplate 
                  code and provides a more declarative approach to forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
