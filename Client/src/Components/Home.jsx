import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Home({email}) {
    const navigate = useNavigate();

    return (
        <>
        <Header/>
     
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
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
    </div>
        </>
    );
}

export default Home;
