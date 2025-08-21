import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formik Registration data:', values);
      alert('Registration successful with Formik!');
      
      // Reset form
      resetForm();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        User Registration (Formik)
      </h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.username && touched.username ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your username"
              />
              <ErrorMessage 
                name="username" 
                component="p" 
                className="mt-1 text-sm text-red-600" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              <ErrorMessage 
                name="email" 
                component="p" 
                className="mt-1 text-sm text-red-600" 
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
              />
              <ErrorMessage 
                name="password" 
                component="p" 
                className="mt-1 text-sm text-red-600" 
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
              } text-white`}
            >
              {isSubmitting ? 'Registering...' : 'Register with Formik'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

