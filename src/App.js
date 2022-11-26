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
    'Authentication & Authorization',
    'Blockchain',
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
    'Documents & Productivity',
    'Email',
    'Environment',
    'Events',
    'Finance',
    'Food & Drink',
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
  function stringCorrect(string) {
    return string.replaceAll(' ', '-').replaceAll('&', '');
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
          <div className="api-box">
            <div className="box-half">
              <a
                href={`https://github.com/public-apis/public-apis#${stringCorrect(
                  apiOne
                )}`}
                target="_blank"
              >
                <button className="btn-api">
                  <h2 className="api-dis">{apiOne}</h2>
                </button>
              </a>
            </div>
            <div className="box-half">
              <a
                href={`https://github.com/public-apis/public-apis#${stringCorrect(
                  apiTwo
                )}`}
                target="_blank"
              >
                <button className="btn-api">
                  <h2 className="api-dis">{apiTwo}</h2>
                </button>
              </a>
            </div>
          </div>
        )}
        {clicked && (
          <div style={{ width: '100%' }}>
            <button
              className="btn-gen-v2"
              onClick={() => {
                setApiOne(apiGen(apiArray));
                setApiTwo(apiGen(apiArray));
                setClicked(true);
              }}
            >
              Generate another Combo!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
