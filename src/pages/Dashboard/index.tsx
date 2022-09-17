import Card from "../../components/Card";
import FormTransaction from "../../components/FormTransaction";
import Header from "../../components/Header";
import TransactionList from "../../components/TransactionList";
import { Button } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { Container, Flex } from "../../styles/Global";
import { Input } from "../../styles/Inputs";
import { Heading, Text } from "../../styles/Text";
import {
  AsideContainer,
  BalanceContainer,
  DashboardWrapper,
  Filters,
  FinanceResume,
  LaptopFlex,
} from "./style";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Container>
        <Header />
        <LaptopFlex>
          <AsideContainer>
            <FormTransaction />
            <BalanceContainer>
              <Flex>
                <Text>Saldo:</Text>
                <Text>0</Text>
              </Flex>
            </BalanceContainer>
          </AsideContainer>
          <FinanceResume>
            <Heading>Resumo Financeiro</Heading>
            <Form>
              <Input placeholder="Buscar por transações, pessoas" />
            </Form>
            <Filters>
              <Button shape={"circle"}>Tudo</Button>
              <Button shape={"circle"}>Entradas</Button>
              <Button shape={"circle"}>Dispesas</Button>
            </Filters>
            <TransactionList />
          </FinanceResume>
          <Button disappearsOn={"tablet"} shape="fullSize">
            Nova Transação
          </Button>
        </LaptopFlex>
      </Container>
    </DashboardWrapper>
  );
};

export default Dashboard;
