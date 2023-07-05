
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState, useEffect } from 'react';

const TableUser = () => {
    const [listUser, setListUser] = useState([]);
    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:8081/users/all");
        // console.log(">>> check data axios", res);
        let data = res && res.data ? res.data : []
        setListUser(data)
    }

    useEffect(() => {
        fetchAllUser();
    }, [])

    const handleDeleteUser = (item) => {
        console.log(item);
    }
    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 && listUser.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => { handleDeleteUser(item) }}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default TableUser;