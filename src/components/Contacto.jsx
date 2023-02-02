import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                </Form.Group>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                    />
                </div>
                <Button variant="danger" type="submit" className='mt-3'>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default BasicExample;