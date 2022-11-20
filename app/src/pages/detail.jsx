import Heading from '../components/layout/Heading';
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/books";
import { Row, Col, Badge } from 'reactstrap';
import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  
  useEffect(function () {
    async function getItem() {
      try {
        const axiosInstance = axios.create({
          baseURL: BASE_URL,
        });

        const response = await axiosInstance.get(`books/?ids=${id}`);
        // console.log("response set:", response.data.results[0]);
        setItem(response.data.results[0]);
      } catch (error) {
        // console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getItem();
  }, [id]);

  if (loading) return <div>Loading page...</div>;

  if (error) return <div>{}</div>;

  console.log(item);

  return (
    <Container>
      <Row className="mt-2">
          <Col sm="4" className="book--image">
            <img className="mw-100" src={item.formats['image/jpeg']} alt="book cover"/>
          </Col>
          <Col sm="8" className="book--info">
            <Heading title={item.title} />
            <p>by:&nbsp;
              {item.authors.map((author) => {
                return (
                  <span key={author.name}>{author.name}</span>
                )
              })}
            </p>
            
            {item.bookshelves.map((genre) => {
              return (
                <Badge key={genre} className="mx-1" color="primary">{genre}</Badge>
              )
            })}


          </Col>
      </Row>
    </Container>
  )

  // Retrieve the parameter from the URL and use it in an API call to fetch one item.

  // Display at least 3 properties from the item.
}