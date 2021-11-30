import axios from 'axios'
import _ from 'dotenv/config'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'semantic-ui-react'

const { REACT_APP_API_URL } = process.env

export default function Read() {
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    axios.get(REACT_APP_API_URL)
      .then((response) => {
        setAPIData(response.data)
      })
  }, [])

  const setData = (data) => {
    const {
      id, firstName, lastName, checkbox,
    } = data
    localStorage.setItem('ID', id)
    localStorage.setItem('First Name', firstName)
    localStorage.setItem('Last Name', lastName)
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const getData = () => {
    axios.get(`${REACT_APP_API_URL}`)
      .then((getData2) => {
        setAPIData(getData2.data)
      })
  }

  const onDelete = (id) => {
    axios.delete(`${REACT_APP_API_URL}/${id}`)
      .then(() => {
        getData()
      })
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Link to='/update'>
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Table.Cell>
              </Link>
              <Link to='/read'>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Link>

            </Table.Row>

          ))
          }

        </Table.Body>
      </Table>
    </div>
  )
}
