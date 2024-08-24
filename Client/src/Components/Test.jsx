import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Context from './Context'; 
import Header from './Header'
import SubmittedTest from './SubmittedTest';
function Test({email}) {
  
  const navigate = useNavigate();

   // Define the list of questions and their respective options
  const questionsData = [
    {
      id: 1,
      question: "What does the 'M' in MERN stack stand for?",
      options: ["MongoDB", "MySQL", "Microsoft", "Meteor"],
      selectedOption: null,
      correctOption: "MongoDB"
    },
    {
      id: 2,
      question: "Which operating system is known for its open-source nature?",
      options: ["Windows", "macOS", "Linux", "Chrome OS"],
      selectedOption: null,
      correctOption: "Linux"
    },
    {
      id: 3,
      question: "What is the primary function of the Transport Layer in the OSI model?",
      options: ["Routing", "Error-checking", "Segmentation", "Encryption"],
      selectedOption: null,
      correctOption: "Segmentation"
    },
    {
      id: 4,
      question: "What is the purpose of the Express.js framework in a MERN stack application?",
      options: ["Database management", "Frontend development", "Backend development", "Authentication"],
      selectedOption: null,
      correctOption: "Backend development"
    },
    {
      id: 5,
      question: "Which protocol is used for assigning IP addresses dynamically?",
      options: ["DHCP", "DNS", "HTTP", "FTP"],
      selectedOption: null,
      correctOption: "DHCP"
    },
    {
      id: 6,
      question: "What is the name of the default package manager for Node.js?",
      options: ["npm", "yarn", "bower", "gulp"],
      selectedOption: null,
      correctOption: "npm"
    },
    {
      id: 7,
      question: "Which type of network topology is characterized by a central device connecting to multiple nodes?",
      options: ["Bus", "Star", "Ring", "Mesh"],
      selectedOption: null,
      correctOption: "Star"
    },
    {
      id: 8,
      question: "What is the purpose of the React library in a MERN stack application?",
      options: ["Database management", "Backend development", "Frontend development", "Authentication"],
      selectedOption: null,
      correctOption: "Frontend development"
    },
    {
      id: 9,
      question: "Which operating system is known for its user-friendly interface and is widely used in personal computers?",
      options: ["Windows", "macOS", "Linux", "Chrome OS"],
      selectedOption: null,
      correctOption: "Windows"
    },
    {
      id: 10,
      question: "What is the name of the protocol used for secure communication over a network?",
      options: ["HTTP", "HTTPS", "FTP", "SSH"],
      selectedOption: null,
      correctOption: "HTTPS"
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(questionsData);
  const [score, setScore] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [error, setError] = useState('');

  // Function to handle the selection of an option
  const handleOptionSelect = (optionIndex) => {
     // Update the selected option for the current question
    const updatedQuestions = questions.map((question, index) => {
      if (index === currentQuestionIndex) {
        return { ...question, selectedOption: optionIndex };
      }
      return question;
    });

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];

    // If the selected option is correct, increase the score
    if (selectedOption === currentQuestion.correctOption) {
      setScore(score + 1);
    }

    setQuestions(updatedQuestions);
  };

  // Function to clear the selected option for the current question
  const handleClear = () => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === currentQuestionIndex) {
        return { ...question, selectedOption: null };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  // Function to go to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  // Function to go to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  
 // useEffect hook to check the camera status when the component mounts
  useEffect(() => {
    const checkCameraStatus = async () => {
      try {
        // Attempt to access the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        if (stream && stream.getVideoTracks().length > 0) {
          setIsCameraOn(true);  // Camera is on
        } else {
          setIsCameraOn(false); // Camera is off or unavailable
        }

        // Stop the stream after checking the status
        stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        setError('Error accessing camera: ' + err.message);
        setIsCameraOn(false);
      }
    };

    checkCameraStatus();
  }, []);

  return (
    <>     
     <Header/>
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
  {isCameraOn ? (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl flex flex-col mt-[-100px]"> {/* Adjusted margin-top */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Online Test - CSE</h1>
      <div className="flex-grow">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">{questions[currentQuestionIndex].question}</h2>
          <ul className="space-y-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} className="flex items-center">
                <label className="flex items-center space-x-2 text-gray-600">
                  <input
                    type="radio"
                    name="option"
                    checked={questions[currentQuestionIndex].selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        <button
          type="button"
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <div className="flex space-x-2">
          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5
              ${currentQuestionIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300'}`}
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5
              ${currentQuestionIndex === questions.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'}`}
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>

          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300`}
            onClick={() => navigate("/SubmittedTest", { state: { email: email, score: score } })}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    error && <p className="text-red-500 text-center">{error}</p>
  )}
</div>
</>
  );
}

export default Test;
