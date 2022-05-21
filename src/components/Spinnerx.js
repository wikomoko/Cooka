import { Container, Row,Spinner } from "react-bootstrap";

const Spinnerx = () => {
  return (
    <>
      <Container className="text-center">
        <Row >
          <div className="col-12 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>...Sedang Memuat...</p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Spinnerx;
