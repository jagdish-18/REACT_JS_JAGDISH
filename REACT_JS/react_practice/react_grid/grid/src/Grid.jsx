import React from 'react'
import Badge  from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Grid = () => {
  return (
    <div>
      <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
    </div>
  )
}

export default Grid