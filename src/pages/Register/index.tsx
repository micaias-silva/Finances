import FormRegister from "../../components/FormRegister";
import { Container, Flex, Img, ImgFrame } from "../../styles/Global";
import { Heading, Text } from "../../styles/Text";
import { FormSection, RegisterWrapper } from "./style";
import cardSVG from "../../assets/homecard.svg";
import { Link } from "../../styles/Text";
import { Button } from "../../styles/Buttons";

const Register = () => {
  return (
    <RegisterWrapper>
      <Container css={{ padding: 0 }}>
        <Flex>
          <Container type={"full"}>
            <FormSection>
              <Heading>Faça seu Cadastro</Heading>
              <FormRegister />
              <Text>
                Já possui uma conta? <Link href="/login">Faça login</Link>
              </Text>
            </FormSection>
          </Container>
          <Container type={"full"} disappearsOn="mobile">
            <ImgFrame>
              <Img src={cardSVG} />
            </ImgFrame>
          </Container>
        </Flex>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
