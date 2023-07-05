
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormAddNew = () => {
    return (
        <>
            <Container>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary">Create</Button>
            </Container>

        </>
    )
}

export default FormAddNew;