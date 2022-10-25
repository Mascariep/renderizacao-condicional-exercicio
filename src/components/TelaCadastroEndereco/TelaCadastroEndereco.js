import { Form, FormContainer, Input, SendButton, StyledLabel, BackToLoginButton } from "./styled";

    function TelaCadastroEndereco(props){
    return(

    <FormContainer >
      <h1>ENDEREÇO</h1>
      <Form>
        <StyledLabel>Endereço:
          <Input />
        </StyledLabel>

        <StyledLabel>Número:
          <Input />
        </StyledLabel>

        <StyledLabel>Telefone:
          <Input />
        </StyledLabel>

        <StyledLabel>Complemento:
          <Input />
        </StyledLabel>

        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo cadastro!</BackToLoginButton>
      </Form>
    </FormContainer>

    )
}

export default TelaCadastroEndereco;