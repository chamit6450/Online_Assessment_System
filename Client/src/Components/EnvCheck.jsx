import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function EnvCheck({ email }) {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(mediaStream);
      } catch (err) {
        setError('Error accessing camera or microphone: ' + err.message);
      }
    };

    getMedia();

    // Clean up the media stream when the component is unmounted
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <>
   <Header/>
    <div className="flex flex-row items-start justify-between h-screen bg-gray-100 p-6">


    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-3xl mx-auto">
  <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Start Your Test</h1>
  <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to the Test Assessment</h1>
    <p className="text-lg text-gray-700 mb-6">
      <strong>Important Instructions:</strong><br />
      1. Please ensure your camera and microphone are turned on. This is necessary to participate in the assessment.<br />
      2. Each question in the quiz is worth one mark, and there is no negative marking for incorrect answers.<br />
      3. Take your time to answer each question, and make sure to review your choices before submitting.
    </p>
  </div>
</div>

  
    <div className="flex flex-col items-start max-w-md">
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}
      {!error && stream && (
        <>
          <h2 className="text-2xl mb-2 text-gray-600">Camera Preview:</h2>
          <video
            autoPlay
            ref={video => {
              if (video) {
                video.srcObject = stream;
              }
            }}
            className="w-full max-w-md mb-4 border border-gray-300 rounded"
          />
          <button
            onClick={() => navigate("/Test", { state: { email } })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Proceed
          </button>
        </>
      )}
    </div>
  </div>
  
  </>
  );
}

export default EnvCheck;