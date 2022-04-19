import React, { useContext, useRef } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useForm } from "react-hook-form";

export function SignupForm(props) {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Full Name"
          {...register("Full Name", { required: true })}
        />
        <Input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
        />{" "}
        <Input
          type="text"
          placeholder="Phone No"
          {...register("Phone No", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
          })}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("Confirm Password", { required: true })}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Already have an account?</MutedLink>
      <BoldLink href="#" onClick={switchToSignin}>
        Signin
      </BoldLink>
    </BoxContainer>
  );
}
