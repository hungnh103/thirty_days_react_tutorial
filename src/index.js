import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

const options = [
  {
    value: '',
    label: '--Select Country--'
  },
  {
    value: 'Finland',
    label: 'Findland'
  },
  {
    value: 'Sweden',
    label: 'Sweden'
  },
  {
    value: 'Norway',
    label: 'Norway'
  },
  {
    value: 'Denmark',
    label: 'Denmark'
  }
]

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>{label}</option>
))

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    country: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    touched: {
      firstName: false,
      lastName: false
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked }
      })
    } else if (type === 'file') {
      console.log(type, 'check here')
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    const { name } = e.target
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    })
  }

  validate = () => {
    const errors = {
      firstName: ''
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 3 and 12'
    }

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills
    }
    console.log(data)
  }

  render() {
    let gender = this.state.gender
    const {firstName} = this.validate()

    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                name='firstName'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              />
              <small>{firstName}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                name='lastName'
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name='email'
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="tel">Telephone </label>
              <input
                type="tel"
                name='tel'
                onChange={this.handleChange}
                placeholder='Telephone'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="dateOfBirth">Date of birth </label>
              <input
                type="date"
                name='dateOfBirth'
                onChange={this.handleChange}
                placeholder='Date of birth'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="favoriteColor">Favorite Color </label>
              <input
                type="color"
                name='favoriteColor'
                onChange={this.handleChange}
                placeholder='Favorite Color'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="weight">Weight </label>
              <input
                type="number"
                name='weight'
                onChange={this.handleChange}
                placeholder='Weight in Kg'
              />
            </div>

            <div className='form-group'>
              <label htmlFor="country">Country </label>
              <br />
              <select
                name="country"
                id="country"
                onChange={this.handleChange}
              >
                {selectOptions}
              </select>
            </div>

            <div className='form-group'>
              <p>Gender</p>
              <div>
                <input
                  type="radio"
                  id='female'
                  name='gender'
                  value='Female'
                  onChange={this.handleChange}
                  checked={gender === 'Female'}
                />
                <label htmlFor="female">Female</label>
              </div>

              <div>
                <input
                  type="radio"
                  id='male'
                  name='gender'
                  value='Male'
                  onChange={this.handleChange}
                  checked={gender === 'Male'}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  id='other'
                  name='gender'
                  value='Other'
                  onChange={this.handleChange}
                  checked={gender === 'Other'}
                />
                <label htmlFor='other'>Other</label>
              </div>
            </div>

            <div className='form-group'>
              <p>Select your skills</p>
              <div>
                <input
                  type="checkbox"
                  id='html'
                  name='html'
                  onChange={this.handleChange}
                />
                <label htmlFor="html">HTML</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id='css'
                  name='css'
                  onChange={this.handleChange}
                />
                <label htmlFor="css">CSS</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id='javascript'
                  name='javascript'
                  onChange={this.handleChange}
                />
                <label htmlFor="javascript">Javascript</label>
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor="bio">Bio</label>
              <br />
              <textarea
                name="bio"
                id="bio"
                cols="50"
                rows="10"
                onChange={this.handleChange}
                placeholder='Write about yourself ...'
              >
              </textarea>
            </div>

            <div className='form-group'>
              <input
                type="file"
                name='file'
                onChange={this.handleChange}
              />
            </div>

            <div className='form-group'>
              <button>Submit</button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
