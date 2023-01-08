import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}>{label}</option>
))

const App = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: undefined,
    weight: '',
    gender: '',
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    bio: '',
    file: '',
    touched: {
      firstName: false
    }
  }

  const [formData, setFormData] = useState(initialState)

  const onSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      title,
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
    } = formData

    const formattedSkills = []
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      skills: formattedSkills,
      file
    }

    console.log(data)
  }

  const onChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked }
      })
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const onBlur = (e) => {
    const { name } = e.target
    setFormData({
      ...formData,
      touched: { ...formData.touched, [name]: true }
    })
  }

  const validate = () => {
    const errors = {
      firstName: ''
    }

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12 characters'
    }

    return errors
  }

  const {
    firstName,
    lastName,
    title,
    email,
    tel,
    dateOfBirth,
    weight,
    country,
    gender,
    bio,
  } = formData

  const errors = validate()

  return (
    <div className='App'>
      <h3>Add Student</h3>

      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='form-group'>
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='First Name'
            />
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>

          <div className='form-group'>
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last Name'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="title">Title </label>
            <input
              type="text"
              id='title'
              name='title'
              value={title}
              onChange={onChange}
              placeholder='Title'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="tel">Telephone </label>
            <input
              type="tel"
              id='tel'
              name='tel'
              value={tel}
              onChange={onChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              type="date"
              id='dateOfBirth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={onChange}
              placeholder='Date of birth'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="favoriteColor">Favorite Color </label>
            <input
              type="color"
              id='color'
              name='favoriteColor'
              onChange={onChange}
              placeholder='Favorite Color'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="weight">Weight </label>
            <input
              type="number"
              id='weight'
              name='weight'
              value={weight}
              onChange={onChange}
              placeholder='Weight in Kg'
            />
          </div>

          <div className='form-group'>
            <label htmlFor="country">Country </label>
            <br />
            <select
              name="country"
              id="country"
              onChange={onChange}
              value={country}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
                checked={gender === 'Other'}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <div className='form-group'>
            <p>Select your skills</p>
            <div>
              <input
                type="checkbox"
                id='html'
                name='html'
                onChange={onChange}
              />
              <label htmlFor="html">HTML</label>
            </div>

            <div>
              <input
                type="checkbox"
                id='css'
                name='css'
                onChange={onChange}
              />
              <label htmlFor="css">CSS</label>
            </div>

            <div>
              <input
                type="checkbox"
                id='javascript'
                name='javascript'
                onChange={onChange}
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
              value={bio}
              onChange={onChange}
              cols="50"
              rows="10"
              placeholder='Write about yourself...'
            />
          </div>

          <div className='form-group'>
            <input
              type="file"
              name='file'
              onChange={onChange}
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
