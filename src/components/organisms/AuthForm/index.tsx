import { Formik } from "formik";
import { Form, Input, FormItem } from "formik-antd";
import { Link, useNavigate } from "react-router-dom";
import * as Atom from "../../atoms";
import * as Yup from "yup";
import {
  CustomFormInner,
  CustomFormGroup,
  CustomFormWrapper,
  CustomForgotLink,
  FormFragment,
  FormTitle,
  FormParagraph,
} from "./styles";
import { pwRegex } from "../../../utils";

export default function AuthForm() {
  const navigate = useNavigate();
  // script for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string()
      .matches(
        pwRegex,
        "Must include uppercase , lowercase letters and a number"
      )
      .min(8, "Password must be at least 8 characters")
      .required("This field is required"),
  });

  return (
    <CustomFormWrapper>
      <CustomFormInner>
        <FormTitle>Login</FormTitle>
        <FormParagraph>Kindly enter your details to log in </FormParagraph>
        <CustomFormGroup>
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              navigate("/dashboard");
              actions.setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => {
              return (
                <FormFragment>
                  <Form>
                    <FormItem name={"email"}>
                      <Input
                        name={"email"}
                        placeholder={"email"}
                        style={{ height: "50px" }}
                      />
                    </FormItem>
                  </Form>
                  <Form>
                    <FormItem name={"password"}>
                      <Input.Password
                        name={"password"}
                        placeholder={"password"}
                        style={{ height: "50px" }}
                      />
                    </FormItem>
                  </Form>

                  {/* Submit Buttton */}
                  <Atom.CustomButton
                    handleSubmit={handleSubmit}
                    type={"Login"}
                  />
                </FormFragment>
              );
            }}
          </Formik>
        </CustomFormGroup>

        <CustomForgotLink>
          <Link to="/"> Forgot your password?</Link>
        </CustomForgotLink>

        <Atom.FormFooter />
      </CustomFormInner>
    </CustomFormWrapper>
  );
}
