import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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

  const handleOptionSelect = (option: string) => {
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
    <div className='my-24 mx-1 sm:mx-2 w-full leading-10'>
      <div className='mb-8 bg-bg-blue w-[60%] p-2 text-[19px]'>
        <p>Digital Marketing and e-commerce</p>
      </div>
      <p className='font-bold mb-8'>Questions</p>
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
      <div className="mt-12 mx-4">
        {currentQuestion > 0 && (
          <button className="px-8 bg-blue-500 rounded-md text-white mr-4" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button className="px-8 bg-blue-500 rounded-md text-white" onClick={handleContinue}>
            Next
          </button>
        ) : (
          <button className="px-8 bg-blue-500 rounded-md text-white" disabled>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
