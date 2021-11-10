import React from "react";
import {
  FormContent,
  FormWrap,
  Icon,
  Container,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  Text,
  FormButton,
} from "./SignInElements";

const index = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">chef</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your Account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default index;
