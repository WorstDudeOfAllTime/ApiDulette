import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const [apiOne, setApiOne] = useState('');
  const [apiTwo, setApiTwo] = useState('');

  const apiArray = [
    'Animals',
    'Anime',
    'Anti-Malware',
    'Art & Design',
    'Books',
    'Business',
    'Calendar',
    'Cloud Storage & File Sharing',
    'Continuous Integration',
    'Cryptocurrency',
    'Currency Exchange',
    'Data Validation',
    'Development',
    'Dictionaries',
    'Disasters',
    'Documents & Productivity',
    'Environment',
    'Events',
    'Finance',
    'Food & Drink',
    'Fraud Prevention',
    'Games & Comics',
    'Geocoding',
    'Government',
    'Health',
    'Jobs',
    'Machine Learning',
    'Music',
    'News',
    'Open Data',
    'Open Source Projects',
    'Patent',
    'Personality',
    'Photography',
    'Science & Math',
    'Security',
    'Shopping',
    'Social',
    'Sports & Fitness',
    'Test Data',
    'Text Analysis',
    'Tracking',
    'Transportation',
    'URL Shorteners',
    'Vehicle',
    'Video',
    'Weather',
  ];

  function apiGen(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div className="App">
      <div className="display-box">
        <h1>API DULETTE!</h1>
        {!clicked ? (
          <button
            className="btn-gen"
            onClick={() => {
              setApiOne(apiGen(apiArray));
              setApiTwo(apiGen(apiArray));
              setClicked(true);
            }}
          >
            Generate your API Combo!
          </button>
        ) : (
          <div className='api-box'>
            <h2 className='api-dis'>{apiOne}</h2>
            <h2 className='api-dis'>{apiTwo}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
