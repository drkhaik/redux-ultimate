
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../action/actions';

const FormAddNew = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const isCreating = useSelector((state) => { return state.user.isCreating })
    console.log("check is Creating", isCreating)
    const handleCreateNewUser = () => {
        // console.log(email, password, username)
        dispatch(createUser(email, password, username))
        setEmail("")
        setPassword("")
        setUsername("")
    }
    return (
        <>
            <Container>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary"
                    onClick={() => handleCreateNewUser()}
                    disabled={isCreating}
                >Create</Button>
            </Container>

        </>
    )
}

export default FormAddNew;