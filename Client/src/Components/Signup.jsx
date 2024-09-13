import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

// Signup component for handling user registration
function Signup() {
  // State variables to store user's email, name, and password
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [errors, setErrors] = useState({});
=======
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8

  // useNavigate hook for navigation
  const navigate = useNavigate();

<<<<<<< HEAD
  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Function to handle user signup
  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

=======
  // Function to handle user signup
  const handleSignup = async () => {
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
    try {
      // Send POST request to the signup API
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // If signup is successful, show an alert and navigate to the Auth page
        alert("Signup successful!");
        navigate('/');
<<<<<<< HEAD
      } 
      else {
=======
      } else {
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
        // If signup fails, show an error message
        const data = await response.json();
        alert(data.msg || "Signup failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that occur during the signup process
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <>
      {/* Render the header component */}
      <Header />

      {/* Main section for signup form */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
<<<<<<< HEAD
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-4 md:mt-0">
=======
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-4 md:mt-0"> {/* Reduced mt */}
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
<<<<<<< HEAD
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
=======
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
<<<<<<< HEAD
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
=======
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
<<<<<<< HEAD
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
=======
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
                </div>
                <button
                  type="button"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <a href="./" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
}

=======
}  
>>>>>>> bf17880d97dc7541c282a4afbb17e9bc27a41ce8
export default Signup;
