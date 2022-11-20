import Heading from '../components/layout/Heading';
import Container from "react-bootstrap/Container";
import ContactForm from "../components/form/ContactForm";

function Contact() {
  return (
    <Container>
      <Heading title="Contact" />
      <ContactForm />
    </Container>
  );

  // Create a form with the following inputs and validation:

  // -   First name - required, minimum 3 characters
  // -   Last name - required, minimum 4 characters
  // -   Email - required, must be in a valid email format
  // -   Subject - required, this must be a select box with at least 2 options
  // -   Message - required, minimum 10 characters.
}

export default Contact;