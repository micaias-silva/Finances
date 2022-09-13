import { Form } from "../../styles/Form";
import { Input } from "../../styles/Inputs";
import { Label } from "../../styles/Text";

const FormLogin = () => {
  return (
    <Form>
      <Label htmlFor="email">E-Mail</Label>
      <Input name="email" placeholder="Digite seu email" />
      <Label htmlFor="password">Senha</Label>
      <Input name="password" placeholder="Digite sua senha" />
    </Form>
  );
};

export default FormLogin;
