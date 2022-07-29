import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils";

// const DEFAULT_IMAGE_POSITION = "top";

const EldenCard = ({ elden }) => {
  return (
    <Col className="my-3">
      <Link to={`/elden/${elden.id}`}>
        <Card>
          <BCard.Header as="small">{elden.id}</BCard.Header>
          <BCard.Body>
            <BCard.Img
              // variant={DEFAULT_IMAGE_POSITION}
              src={elden.image}
              loading="lazy"
              alt={capitalize(elden.name)}
            />
            <BCard.Title>{capitalize(elden.name)}</BCard.Title>
          </BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default EldenCard;
