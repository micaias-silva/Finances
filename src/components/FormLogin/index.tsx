import { Button } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { Input } from "../../styles/Inputs";
import { Label } from "../../styles/Text";

const FormLogin = () => {
  return (
    <Form>
      <Input name="email" placeholder="Digite seu email" />
      <Input name="password" placeholder="Digite sua senha" />
      <Button shape={"fullSize"}>Logar</Button>
    </Form>
  );
};

export default FormLogin;
