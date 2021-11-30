import _ from 'dotenv/config'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default function Update() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [ID, setID] = useState(null)

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'))
    setLastName(localStorage.getItem('Last Name'))
    setCheckbox(localStorage.getItem('Checkbox Value'))
  }, [])

  const updateAPIData = async () => axios.put(`${REACT_APP_API_URL}/${ID}`, {
    firstName,
    lastName,
    checkbox,
  })

  return (
    <Form className='create-form'>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
      </Form.Field>
      <Link to='/read'>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Link>
    </Form>
  )
}
