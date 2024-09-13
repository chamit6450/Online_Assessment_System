import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Home({email}) {
    const navigate = useNavigate();

    return (
        <>
        <Header/>
     
      {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to the Test Assessment</h1>
      <p className="text-lg text-gray-700 mb-4">
        We're excited to have you here!<br />
        Make sure to read each question carefully and select the best answer.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        <strong>Important Instructions:</strong><br />
        1. Please ensure your camera and microphone are turned on. This is necessary to participate in the assessment.<br />
        2. Each question in the quiz is worth one mark, and there is no negative marking for incorrect answers.<br />
        3. Take your time to answer each question, and make sure to review your choices before submitting.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Good luck, and may the best score win!
      </p>
      <div>
        <button 
          onClick={() => navigate("/EnvCheck", { state: {email } })}
          className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 ease-in-out"
        >
          Start Test
        </button>
      </div>
    </div> */}

<p className="text-xl font-semibold text-gray-800 mb-6 border-t-2 ">
  Your Test's
</p>

<div className="flex flex-row">
  <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        [Beginner Practice] MERN - Level 1
      </h5>
    </a>
    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
      <strong>MERN stack</strong><br />
      <span className="block mt-2"><strong>15 questions</strong></span>
      <span className="block mt-1"><strong>20 minutes</strong></span>
      <span className="block mt-1"><strong>Date:</strong> Sept 8, 2024</span>
    </p>
    <button
      onClick={() => navigate("/EnvCheck", { state: { email } })}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Start Test
    </button>
  </div>
</div>



        </>
    );
}

export default Home;
