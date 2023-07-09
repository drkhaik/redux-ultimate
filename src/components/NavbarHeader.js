
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'

const NavbarHeader = (props) => {
    const listUser = useSelector(
        (state) => {
            return state.user.listUser
        }
    )

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">NavbarHeader</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown style={{ 'marginLeft': '50px' }} title={`${listUser.length}  User`} id="basic-nav-dropdown">
                                {listUser && listUser.length > 0 &&
                                    listUser.map(item => {
                                        return (
                                            <NavDropdown.Item href=""> {item.email} </NavDropdown.Item>
                                        )
                                    })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarHeader;