import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavLink from "react-bootstrap/NavLink";

function Navigation() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<Navbar expand="lg" variant="dark" bg="dark">
			<Container>

			<Nav.Link href="/">Home</Nav.Link >
			{/* <Nav.Link href="/detail">Detail</Nav.Link > */}
			<Nav.Link href="/contact">Contact</Nav.Link >
			{/* <Nav.Link href="/admin">Admin</Nav.Link > */}
			{auth ? (
				<>
					<button onClick={logout}>Log out</button>
				</>
			) : (
				<Nav.Link href="/login">Login</Nav.Link >
				)}
			</Container>
		</Navbar>
	);
}

export default Navigation;
