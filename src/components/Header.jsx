import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import FIFALogo from "../assets/fifa.png";
const Header = () => {
  return (
    <Container>
      <Image src={FIFALogo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">FIFA Legends</h1>
    </Container>
  );
};
export default Header;
