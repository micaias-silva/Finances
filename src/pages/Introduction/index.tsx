import { Button } from "../../styles/Buttons";
import { Container } from "../../styles/Global";
import { Logo, Text } from "../../styles/Text";
import cardSVG from "../../assets/homecard.svg";
import { HomeCard, IntroWrapper, Section } from "./style";
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
      <Container>
        <HomeCard>
          <img src={cardSVG} alt="" />
        </HomeCard>
      </Container>
    </IntroWrapper>
  );
};

export default Introduction;
