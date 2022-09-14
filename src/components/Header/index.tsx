import { useHistory } from "react-router-dom";
import { Button } from "../../styles/Buttons";
import { Flex } from "../../styles/Global";
import { Logo } from "../../styles/Text";
import { HeaderStyle } from "./style";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <Logo color={"primary"}>Finances</Logo>
      <Button onClick={() => history.push("/")} background={"grey2"}>
        Início
      </Button>
    </HeaderStyle>
  );
};
export default Header;
