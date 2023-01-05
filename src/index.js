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
      lastName: false,
      email: false,
      tel: false,
      weight: false,
      country: false,
      gender: false,
      html: false,
      css: false,
      javascript: false,
      bio: false,
      file: false
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
        touched: { ...this.state.touched, [name]: true }
      })
    } else if (type === 'file') {
      console.log(type, 'check here')
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    console.log(e.target.name)
    const { name } = e.target
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    })
  }

  validate = () => {
    const errors = {
      firstName: null,
      lastName: null,
      email: null,
      tel: null,
      dateOfBirth: null,
      weight: null,
      country: null,
      gender: null,
      skills: null,
      bio: null,
      file: null
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 3 and 12 characters'
    }

    if (
      (this.state.touched.lastName && this.state.lastName.length < 2) ||
      (this.state.touched.lastName && this.state.lastName.length > 5)
    ) {
      errors.lastName = 'Last name must be between 2 and 5 characters'
    }

    if (this.state.touched.email && !this.state.email.includes('@')) {
      errors.email = 'Email must contain @ character'
    }

    if (this.state.touched.tel && this.state.tel[0] !== '0') {
      errors.tel = 'Telephone must start with number 0'
    }

    if (!!this.state.dateOfBirth && new Date(this.state.dateOfBirth) >= new Date()) {
      errors.dateOfBirth = 'Date of birth must be in the past'
    }

    if (this.state.touched.weight && Number(this.state.weight) > 100) {
      errors.weight = 'Weight should not over 100 kg'
    }

    if (this.state.touched.country && this.state.country === 'Finland') {
      errors.country = 'Cannot select this country'
    }

    if (this.state.touched.gender && this.state.gender === 'Other') {
      errors.gender = 'Please select another option'
    }

    if (
      this.state.touched.html ||
      this.state.touched.css ||
      this.state.touched.javascript
    ) {
      let selectedSkills = 0
      Object.values(this.state.skills).forEach((e) => {
        if(e) selectedSkills++
      })

      console.log(selectedSkills)
      if (selectedSkills < 2) {
        errors.skills = 'must select at least 2 skills'
      }
    }

    if (this.state.touched.bio && this.state.bio.length < 5) {
      errors.bio = 'Bio must be longer than 5 characters'
    }

    if (
      this.state.touched.file &&
      !!this.state.file &&
      !['png', 'jpg', 'jpeg'].includes(this.state.file.name.split('.').pop())
    ) {
      errors.file = 'File type must be png, jpg or jpeg'
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
    let current_gender = this.state.gender
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      country,
      gender,
      skills,
      bio,
      file
    } = this.validate()

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
              <small className='error-message'>{firstName}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                name='lastName'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Last Name'
              />
              <small className='error-message'>{lastName}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name='email'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Email'
              />
              <small className='error-message'>{email}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="tel">Telephone </label>
              <input
                type="tel"
                name='tel'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Telephone'
              />
              <small className='error-message'>{tel}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="dateOfBirth">Date of birth </label>
              <input
                type="date"
                name='dateOfBirth'
                onChange={this.handleChange}
                placeholder='Date of birth'
              />
              <small className='error-message'>{dateOfBirth}</small>
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
                onBlur={this.handleBlur}
                placeholder='Weight in Kg'
              />
              <small className='error-message'>{weight}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="country">Country </label>
              <br />
              <select
                name="country"
                id="country"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                {selectOptions}
              </select>
              <small className='error-message'>{country}</small>
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
                  onBlur={this.handleBlur}
                  checked={current_gender === 'Female'}
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
                  onBlur={this.handleBlur}
                  checked={current_gender === 'Male'}
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
                  onBlur={this.handleBlur}
                  checked={current_gender === 'Other'}
                />
                <label htmlFor='other'>Other</label>
              </div>
              <small className='error-message'>{gender}</small>
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
              <small className='error-message'>{skills}</small>
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
                onBlur={this.handleBlur}
                placeholder='Write about yourself ...'
              >
              </textarea>
              <small className='error-message'>{bio}</small>
            </div>

            <div className='form-group'>
              <label htmlFor="avatar">Avatar</label>
              <br />
              <input
                id='avatar'
                type="file"
                name='file'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <small className='error-message'>{file}</small>
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
