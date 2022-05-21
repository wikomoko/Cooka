import { Container, Row,Form,Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Kartu from "../components/Kartu";
import Spinnerx from "../components/Spinnerx";
const Beranda = () => {
  const [message, setMessage] = useState("ikura");
  const [ok,setOk] = useState(true);
  const URL_API = `https://api.edamam.com/api/recipes/v2?type=public&q=${message}&app_id=a03c43af&app_key=e5d79dffe2b66474ff75017f1e0f357d`;
  const getDataSource = () => {
    axios
      .get(URL_API)
      .then((response) => {
        setDatax(response.data.hits);
        console.log(response.data);
        setOk(true);
      })
      .catch((error) => console.error(`Error : ${error}`));
  };
    useEffect(() => {
      getDataSource();
    }, []);

  const [datax, setDatax] = useState([]);

  const handleClick = (event) => {
     getDataSource();
     setOk(false)
    // alert(message);
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="bg-white"
                type="email"
                placeholder="mau makan apa ?"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div className="col-md-3"> <Button variant="primary" className="" onClick={handleClick}>Cari</Button></div>
        </Row>
      </Container>
      <Container>
        <Row>
          {
            ok == false ? <Spinnerx/> : 
           datax.length != 0
            ? datax.map((i) => (
                <div className="col-md-3">
                  {/* <p>{i.recipe.label}</p> */}
                <Kartu label={i.recipe.label} gambar={i.recipe.images.REGULAR.url} kalori={i.recipe.calories} bahan={i.recipe.ingredients} id={i.recipe.uri} />
                  {/* <Link to={`/baru/${i.id}`}>
                    <Button>Detail</Button>
                  </Link> */}
                </div>
              ))
            : 
             <Spinnerx/>
            
            }
            {/* <div className="col-md-3">
                <Kartu/>
            </div> */}
            
        </Row>
      </Container>
    </>
  );
};

export default Beranda;
