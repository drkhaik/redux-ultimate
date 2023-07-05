
import NavbarHeader from "./NavbarHeader";
import TableUser from "./TableUser";
import FormAddNew from "./FormAddNew";
import Container from 'react-bootstrap/Container';


const Home = (props) => {
    return (
        <>
            <NavbarHeader />

            <FormAddNew />
            <TableUser />

        </>
    )
}

export default Home;