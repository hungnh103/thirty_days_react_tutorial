import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const url = 'https://media.istockphoto.com/id/1311993425/photo/cat-world.jpg?b=1&s=170667a&w=0&k=20&c=IGWziVF64jrhp9pszNmaZT4hA1PFq2KuFfrRPFgfRxs='

  const [image, setImage] = useState(url)

  const changeAnimal = () => {
    let dogURL = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'

    let catURL = 'https://media.istockphoto.com/id/1311993425/photo/cat-world.jpg?b=1&s=170667a&w=0&k=20&c=IGWziVF64jrhp9pszNmaZT4hA1PFq2KuFfrRPFgfRxs='

    let result = image === catURL ? dogURL : catURL
    setImage(result)
  }

  return (
    <div className='App'>
      <h1>30 Days Of React</h1>
      <div className='animal'>
        <img src={image} alt="animal" style={{height: 300}} />
      </div>

      <button onClick={changeAnimal}>
        Change
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
