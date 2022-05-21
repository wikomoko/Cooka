import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Kartu = (props) => {
  let link_lama = props.id;
  var id_baru = link_lama.substring(link_lama.lastIndexOf("_") + 1);
  return (
    <div className="p-3">
      <Card className="text-center">
        <Card.Img variant="top" src={props.gambar} />
        <Card.Body>
          <Card.Title className="text-truncate">{props.label}</Card.Title>
          <Card.Text>
            <span>Kalori :</span>
            <span>
              <b>{Math.round(props.kalori / 2)}</b>
            </span>
            <br />
            <span>Bahan :</span>
            <span>
              <b>{props.bahan.length}</b> Jenis
            </span>
          </Card.Text>
          <Link to={`/baru/${id_baru}`}>
            <Button variant="primary">Lihat Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kartu;
