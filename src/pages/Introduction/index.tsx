import { Button } from "../../styles/Buttons";
import { Container, Img, ImgFrame } from "../../styles/Global";
import { Logo, Text } from "../../styles/Text";
import cardSVG from "../../assets/homecard.svg";
import { IntroWrapper, Section } from "./style";
import { useHistory } from "react-router-dom";

const Introduction = () => {
  const history = useHistory();
  return (
    <IntroWrapper>
      <Container>
        <Section>
          <Logo color="primary">Finances</Logo>
          <Text color="white" type="larger">
            Centralize o controle das suas finanças
          </Text>
          <Text color="white">de forma rápida e segura</Text>
          <Button onClick={() => history.push("/login")} type="fullSize">
            Começar
          </Button>
        </Section>
      </Container>
      <Container disappearsOn={"mobile"}>
        <ImgFrame>
          <Img src={cardSVG} />
        </ImgFrame>
      </Container>
    </IntroWrapper>
  );
};

export default Introduction;
