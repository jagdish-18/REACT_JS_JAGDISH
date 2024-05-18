import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@mui/material/Button'

const BootGrid = () => {
    return (
        <div>
            <Container>
                <Row fluid="lg">
                    <Col className='border border-black'>1</Col>
                    <Col className='border border-black'>2</Col>
                    <Col className='border border-black'>3</Col>
                </Row>
                <Row fluid="sm">
                    <Col sm={6} xs={1} className='border border-black'>1</Col>
                    <Col sm={6} xs={1} className='border border-black'>2</Col>
                    <Col sm={6} xs={1} className='border border-black'>7</Col>
                    <Col sm={6} xs={1} className='border border-black'>8</Col>
                    <Col sm={6} xs={1} className='border border-black'>9</Col>
                </Row>
                <Button className='mt-4' variant="outlined" color='primary'>Click me</Button>
                <Button className='mt-4 ms-4' color='error' variant="outlined">heybutton</Button>

            </Container>

        </div>
    )
}

export default BootGrid
