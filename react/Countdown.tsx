import React from "react";
import { Container, Button, Form } from "react-bootstrap";
interface FormsLeadsProps {}
const FormsLeads: StorefrontFunctionComponent<FormsLeadsProps> = ({}) => {
  //Amplify.configure(awsExports);
  async function addContact() {
    const data = {
      body: {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
      },
    };
    console.log(data);
    const apiData = await API.post("formApi", "/contact", data);
    console.log({ apiData });
  }
  const formState = { name: "", email: "", phone: "" };
  function updateFormState(key: string, value: string) {
    formState[key] = value;
  }
  return (
    <Container>
      <div>
        <h3>Receba todas as nossas promoções.</h3>
        <h2>Cadastre-se já e começe suas compras!</h2>
        <br />
        <Form>
          <Form.Group>
            <Form.Label>Seu nome</Form.Label>
            <Form.Control
              placeholder="Nome"
              onChange={(e) => updateFormState("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Seu melhor e-mail</Form.Label>
            <Form.Control
              placeholder="Email"
              onChange={(e) => updateFormState("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              placeholder="Telefone"
              onChange={(e) => updateFormState("phone", e.target.value)}
            />
          </Form.Group>
          <Button onClick={addContact}>Enviar</Button>
        </Form>
      </div>
    </Container>
  );
};
FormsLeads.schema = {
  title: "editor.formleads.title",
  description: "editor.formleads.description",
  type: "object",
  properties: {},
};
export default FormsLeads;
