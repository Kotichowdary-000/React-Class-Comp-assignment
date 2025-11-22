import React, { useState } from 'react';

const CountWords = () => {
  const [sent, Setsent] = useState(0);
  const [word, Setword] = useState(0);
  const [char, Setchar] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    let sentences = text.split('.').length - 1;
    let wordsArray = text.replaceAll('.', ' ').split(' ');
    let words = wordsArray.filter(w => w !== '').length;
    let characters = text.replace(/[\s.?]/g, '').length;

    Setchar(characters);
    Setsent(sentences);
    Setword(words);
  };

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded">

      <div className="row">

      
        <div className="col-lg-6 col-12 text-center">
          <textarea
            rows="12"
            className="bg-dark text-white p-2 border border-light rounded w-100"
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button className="btn btn-primary mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      
        <div className="col-lg-6 col-12 d-flex flex-column align-items-center ml-5 mt-lg-0">
          <h4 className='text-warning'>Results:</h4>
          <p>Sentences: {sent}</p>
          <p>Words: {word}</p>
          <p>Characters: {char}</p>
        </div>

      </div>

    </div>
  );
};

export default CountWords;
