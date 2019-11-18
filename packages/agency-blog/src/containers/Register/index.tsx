import * as React from "react"
import { Formik, FormikActions, FormikProps, Form } from "formik"
import * as Yup from "yup"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Web3 from "web3"
import axios from "axios"

import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from "./style"

interface MyFormValues {
  firstName: string
  email: string
  message: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required"),
})

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", message: "" }}
      onSubmit={(
        values: MyFormValues,
        actions: FormikActions<MyFormValues>
      ) => {
        setTimeout(() => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 700)
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Artist register</h2>
                <p>Connect to your MetaMask Ethereum account.</p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Button
                    title="connect to MetaMask"
                    onClick={() => {
                      if (window.ethereum) {
                        window.web3 = new Web3(window.ethereum)
                        window.ethereum
                          .enable()
                          .then(res => {
                            // this.setState({ wallet: res[0] })
                            // alert(res[0])
                            axios
                              .post(`http://localhost:8080/getOwnerTokens/`, {
                                address: res[0],
                              })
                              .then(res => {
                                // console.log(res.data);
                                console.log(res)
                                alert("Connect successfully")
                              })
                              .catch(err => console.log(err))
                          })
                          .catch(err => alert(err))
                      } else if (window.web3) {
                        window.web3 = new Web3(window.web3.currentProvider)
                      }
                    }}
                  />
                </InputGroup>
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  )
}

export default Contact
