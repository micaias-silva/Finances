import { useEffect } from "react";
import FormLogin from "../../components/FormLogin";
import { Container, Flex, Img, ImgFrame, Wrapper } from "../../styles/Global";
import { Heading, Link, Text } from "../../styles/Text";
import { FormSection, LoginWrapper } from "./style";
import cardSVG from "../../assets/homecard.svg";

const Login = () => {
  useEffect(() => {}, []);
  return (
    <LoginWrapper>
      <Container css={{ padding: 0 }}>
        <Flex>
          <Container type={"full"} disappearsOn={"mobile"}>
            <ImgFrame>
              <Img src={cardSVG} />
            </ImgFrame>
          </Container>
          <Container type={"full"}>
            <FormSection>
              <Heading>Faça Login</Heading>
              <FormLogin />
              <Text>
                Não possui cadastro? <Link href="/register">Registre-se!</Link>
              </Text>
              <Link>Esqueceu sua senha?</Link>
            </FormSection>
          </Container>
        </Flex>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
