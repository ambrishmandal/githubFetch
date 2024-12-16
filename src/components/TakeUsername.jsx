import React, { useState } from 'react';
import DisplayPage from './DisplayPage';

function TakeUsername() {
  const [username, setUsername] = useState(''); // Tracks the input value
  const [submittedUsername, setSubmittedUsername] = useState(null); // Tracks the confirmed username for DisplayPage

  // Handle search on button click or pressing Enter key
  const handleClick = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setSubmittedUsername(username.trim()); // Update with the trimmed username
      setUsername('')
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick(e); // Trigger handleClick on Enter key press
    }
  };

  return (
    <div
      className='w-full h-full flex flex-col justify-center items-center gap-5 p-5'
      style={{
        backgroundColor: '#ffe999',
        backgroundImage: `
          radial-gradient(at 43% 32%, hsla(190,88%,61%,1) 0px, transparent 50%),
          radial-gradient(at 80% 61%, hsla(200,93%,69%,1) 0px, transparent 50%),
          radial-gradient(at 74% 19%, hsla(161,77%,66%,1) 0px, transparent 50%),
          radial-gradient(at 67% 2%, hsla(41,66%,60%,1) 0px, transparent 50%),
          radial-gradient(at 92% 72%, hsla(53,85%,68%,1) 0px, transparent 50%),
          radial-gradient(at 38% 15%, hsla(10,81%,64%,1) 0px, transparent 50%),
          radial-gradient(at 41% 32%, hsla(101,98%,67%,1) 0px, transparent 50%)
        `,
      }}
    >
      {/* Input Section */}
      <h1 className='text-2xl font-bold text-gray-800'>Enter the GitHub Username:</h1>
      <input
        type='text'
        placeholder='Username...'
        value={username}
        onChange={(e) => {setUsername(e.target.value)

        }} // Update the username as the user types
        onKeyDown={handleKeyPress} // Listen for Enter key press
        className='border p-2 rounded-lg w-1/2 text-lg'
      />
      <button
        className='bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all'
        onClick={handleClick}
      >
        Search
      </button>

      {/* Conditionally Render DisplayPage */}
      {submittedUsername && <DisplayPage key={submittedUsername} username={submittedUsername} />}
    </div>
  );
}

export default TakeUsername;
