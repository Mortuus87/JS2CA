import Heading from "../components/layout/Heading";
import LoginForm from "../components/form/LoginForm";
import Container from "react-bootstrap/Container";

export default function LoginPage() {
	return (
    <Container>
			<Heading title="Login" />
			<LoginForm />
    </Container>

	// Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).

	// The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.

	// If the login is unsuccessful display a message above the form.

	);
}