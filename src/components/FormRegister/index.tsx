import { Button } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { Input } from "../../styles/Inputs";
import { Label } from "../../styles/Text";

const FormRegister = () => {
  return (
    <Form>
      <Input name="name" placeholder="Nome" />
      <Input name="lastName" placeholder="Sobrenome" />
      <Input name="email" placeholder="Email" />
      <Input name="emailConfirm" placeholder="Confirme seu email" />
      <Input name="password" placeholder="Senha" />
      <Input name="passwordConfirm" placeholder="Confirme sua senha" />
      <Button shape={"fullSize"}>Cadastrar</Button>
    </Form>
  );
};

export default FormRegister;
