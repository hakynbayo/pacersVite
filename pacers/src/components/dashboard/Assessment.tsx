import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: '1. Which of the following best describes online reputation management?',
      options: [
        'Monitoring mentions of your brand on social media to address false comments',
        'Encouraging customers to leave reviews',
        'Coming up with responses you can share with users',
        'Encouraging customers to patronize you',
      ],
    },
    {
      question: '2. Which of the following best describes online reputation management?',
      options: [
        'Monitoring mentions of your brand on social media to address false comments',
        'Encouraging customers to leave reviews',
        'Coming up with responses you can share with users',
        'Encouraging customers to patronize you',
      ],
    },
    // Add more questions and options as needed
  ];

  const handleOptionSelect = (option:string) => {
    setSelectedOption(option);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className='my-32 mx-8 sm:mx-64 w-full leading-10'>
        <p className='font-bold'>Questions</p>
      <p className="text-md mb-4">{questions[currentQuestion].question}</p>
      <ol className="list-none ml-6">
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} className="mb-2 cursor-pointer">
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <span className="ml-2 text-[10px] sm:text-[16px]">{option}</span>
            </label>
          </li>
        ))}
      </ol>
      <div className="mt-4">
        {currentQuestion > 0 && (
          <button className="px-2 py-1 bg-blue-500 rounded-md text-white mr-4" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button className="px-2 py-1 bg-blue-500 rounded-md text-white" onClick={handleContinue}>
            Continue
          </button>
        ) : (
          <button className="px-2 py-1 bg-blue-500 rounded-md text-white" disabled>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
