import { Button } from "react-bootstrap";
import "./ImageBanner.css";

export const ImageBanner = ({ title, message, link01, link02, shopKids, backgroundImage }) => {
  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      <p>{message}</p>
      <div className="buttonContainer">
        <Button variant="outline-light">{link01}</Button>
        <Button variant="outline-light">{link02}</Button>
        {shopKids && <Button variant="outline-light">SHOP KIDS</Button>}
      </div>
    </div>
  );
};
