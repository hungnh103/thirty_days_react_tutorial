import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  firstName = React.createRef()
  lastName = React.createRef()
  country = React.createRef()
  title = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.firstName.current.value)
    console.log(this.lastName.current.value)
    console.log(this.country.current.value)
    console.log(this.title.current.value)

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      country: this.country.current.value,
      title: this.title.current.value,
    }

    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name='firstName'
              placeholder='First Name'
              ref={this.firstName}
            />
          </div>

          <div>
            <input
              type="text"
              name='lastName'
              placeholder='Last Name'
              ref={this.lastName}
            />
          </div>

          <div>
            <input
              type="text"
              name='country'
              placeholder='Country'
              ref={this.country}
            />
          </div>

          <div>
            <input
              type="text"
              name='title'
              placeholder='Title'
              ref={this.title}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
