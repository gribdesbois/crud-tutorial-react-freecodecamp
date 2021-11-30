import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import _ from '../env'

const { REACT_APP_API_URL } = process.env

const Create = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const postData = () => {
    axios.post(
      REACT_APP_API_URL,
      {
        firstName,
        lastName,
        checkbox,
      },
    )
  }

  return (
    <Form className='create-form'>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={() => setCheckbox(!checkbox)}/>
      </Form.Field>
      <Button type='submit' onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create
