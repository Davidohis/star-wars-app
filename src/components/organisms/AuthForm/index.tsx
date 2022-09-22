import React from "react";
import { Formik } from "formik";
import { Form, Input, FormItem } from "formik-antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import * as Atom from "../../atoms";
import {
  CustomFormInner,
  CustomLabel,
  CustomFormGroup,
  CustomFormWrapper,
  CustomForgotLink,
} from "./styles";

export default function AuthForm() {
  const { Title, Paragraph } = Typography;
  return (
    <CustomFormWrapper>
      <CustomFormInner>
        <Title level={3}>Login</Title>
        <Paragraph>Kindly enter your details to log in </Paragraph>
        <CustomFormGroup>
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
            }}
            // validationSchema={validationSchema}
          >
            {({ handleSubmit }) => {
              return (
                <React.Fragment>
                  <Form>
                    <CustomLabel>
                      Email or User Name <span>*</span>
                    </CustomLabel>
                    <FormItem name={"userName"}>
                      <Input name={"userName"} />
                    </FormItem>
                  </Form>
                  <Form>
                    <CustomLabel>
                      Password<span>*</span>
                    </CustomLabel>
                    <FormItem name={"password"}>
                      <Input.Password name={"password"} />
                    </FormItem>
                  </Form>

                  {/* Submit Buttton */}
                  <Atom.CustomButton
                    handleSubmit={handleSubmit}
                    type={"Login"}
                  />
                </React.Fragment>
              );
            }}
          </Formik>
        </CustomFormGroup>

        <CustomForgotLink>
          <Link to="/"> Forgot your password?</Link>
        </CustomForgotLink>
      </CustomFormInner>
    </CustomFormWrapper>
  );
}
