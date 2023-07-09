
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteUser } from '../action/actions';

const TableUser = () => {
    // const [listUser, setListUser] = useState([]);
    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8081/users/all");
    //     // console.log(">>> check data axios", res);
    //     let data = res && res.data ? res.data : []
    //     setListUser(data)
    // }
    const listUser = useSelector(
        (state) => {
            return state.user.listUser
        }
    )
    const isLoading = useSelector((state) => { return state.user.isLoading })
    const isError = useSelector((state) => { return state.user.isError })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user.id));
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
                        {isError === true ?
                            <>
                                <tr> <td style={{ 'textAlign': 'center' }} colSpan={4}>Something went wrong...</td> </tr>
                            </>
                            :
                            <>
                                {isLoading === true ?
                                    <tr> <td style={{ 'textAlign': 'center' }} colSpan={4}>Loading...</td> </tr>
                                    :
                                    <>
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
                                    </>
                                }
                            </>
                        }


                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default TableUser;