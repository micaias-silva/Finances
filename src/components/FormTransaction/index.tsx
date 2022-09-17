import { Button } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { Input, Select } from "../../styles/Inputs";
import { Label } from "../../styles/Text";
import { FormContainer } from "./style";

const FormTransaction = () => {
  return (
    <FormContainer>
      <Form>
        <Label htmlFor="description">Descrição</Label>
        <Input placeholder="Descrição da transação" />
        <Label htmlFor="Value">Valor</Label>
        <Input placeholder="Valor da transação" />
        <Label htmlFor="valueType">Tipo da transação</Label>
        <Select name="valueType">
          <option value="in">Entrada</option>
          <option value="out">Saída</option>
        </Select>
        <Button type="submit" shape="fullSize">
          Inserir Valor
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FormTransaction;
