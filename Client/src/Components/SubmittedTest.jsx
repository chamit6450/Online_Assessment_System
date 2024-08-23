import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Context from './Context';

function SubmittedTest() {
  const location = useLocation();
  const email = location.state.email;
  const score = location.state.score;

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await fetch("http://localhost:3000/setScore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email, 
            score: score, 
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Test submitted successfully! Check your email for the score.");
        } else {
          alert("Error submitting test: " + data.message);
        }
      } catch (error) {
        console.error("Error during test submission:", error);
        alert("An error occurred during submission.");
      }
    };

    handleSubmit();
  }, [email, score]);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center mt-16">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-6">Thank you for taking the test!</p>
          <p className="text-md text-gray-600">The results will also be shared to your email </p>
        </div>
      </div>
    </div>
  );
}

export default SubmittedTest;
