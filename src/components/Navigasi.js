import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigasi = () => {
    return ( 
        <>
        <Navbar  variant="dark" className="customBlue">
         <Container>
         {/* <Link to={`/`}> */}
           <Navbar.Brand >Aplikasi Resep <b>Cooka</b></Navbar.Brand>
           {/* </Link> */}
         </Container>
       </Navbar>
        </>
     );
}
 
export default Navigasi;