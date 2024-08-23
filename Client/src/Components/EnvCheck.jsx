import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Start Your Test</h1>
        
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        {!error && stream && (
          <div className="flex flex-col items-center">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default EnvCheck;