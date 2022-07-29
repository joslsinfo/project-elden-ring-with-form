import BCard from "react-bootstrap/Card";

const DEFAULT_WIDTH = "18rem";

const Card = ({ width = DEFAULT_WIDTH, children }) => {
  return <BCard style={{ width: width }}>{children}</BCard>;
};

export default Card;
