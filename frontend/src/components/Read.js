import axios from 'axios'
import _ from 'dotenv/config'
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'

const { REACT_APP_API_URL } = process.env

export default function Read() {
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    axios.get(REACT_APP_API_URL)
      .then((response) => {
        setAPIData(response.data)
      })
  }, [])

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
            </Table.Row>
          ))
          }

        </Table.Body>
      </Table>
    </div>
  )
}
