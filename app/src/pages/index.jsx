import Heading from '../components/layout/Heading';
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/books";
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Home() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(function () {
    async function getItems() {
      try {
        const axiosInstance = axios.create({
          baseURL: BASE_URL,
        });

        const response = await axiosInstance.get(`books`);
        // console.log("response set:", response.data.results);
        setItems(response.data.results);
      } catch (error) {
        // console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getItems();
  }, []);

  if (loading) return <Container>Loading page...</Container>;

  if (error) return <div>{}</div>;

  // console.log(items);

  return (
    <Container>
      <Heading title="A bunch of books" />
      <Row>
        {items.map((item) => {
          console.log(item);
          return (
            <Col key={item.id} sm="12" md="6" lg="3">
              <Link to={`/detail/${item.id}`}>
                <Card className="mb-2">
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )

  // Find an API that returns at least:

  // -   an array of items
  // -   a single item retrieved by a parameter (id, name, slug, etc)

  // If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

  // You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

  // Display at least 2 properties from each result.

  // Each result should link to the detail page, passing a parameter in the URL.
}
