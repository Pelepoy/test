import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
 const year = new Date().getFullYear()

  return (
   <Container>
    <Row>
      <Col className='text-center py-3'>
        <p>Koy Brand &copy; {year} </p>
      </Col>
    </Row>
   </Container>
  )
}

export default Footer
