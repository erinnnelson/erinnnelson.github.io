import React from 'react'



export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      formData: {
        name: '',
        _replyto: '',
        message: ''
      }
    })
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
  }

  render() {
    return (
      <div id='contact-container'>
        <form action='https://formspree.io/iamerinnnelson@gmail.com' method='POST'>
          <input
            type='text'
            name='name'
            className='form-input'
            value={this.state.formData.name}
            placeholder='Name...'
            onChange={this.handleChange}
            autoComplete='off'
          />
          <br />
          <textarea
            name="message"
            className='form-input'
            value={this.state.formData.message}
            cols="30"
            rows="10"
            placeholder='Your message...'
            onChange={this.handleChange}
            autoComplete='off'
          />
          <br />
          <input
            type="submit"
            id='button-form-submit'
            value="Contact Me" />
        </form>
      </div>

    );
  }
}