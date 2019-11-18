import React, { Component } from "react"
import * as Yup from "yup"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Web3 from "web3"
import axios from "axios"

import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails } from "./style"
import { Formik } from "formik"
const Shop: React.SFC<{}> = () => {
  let item: any = []

  axios
    .get(`http://localhost:8080/getOnStoreTokens/`)
    .then(res => {
      for (var i = 0; i < res.data.length; i++) {
        if (item !== undefined)
          item.push(
            <div>
              <div>artist:{res.data[i].artist}</div>
              <div>descrption:{res.data[i].description}</div>
              <div>realart:{res.data[i].realart}</div>
              <div>thumnail:{res.data[i].thumnail}</div>
              <div>timestamp:{res.data[i].timestamp}</div>
              <div>id:{res.data[i].id}</div>
            </div>
          )
      }
      // console.log(item)
    })
    .catch(err => alert(err))

  return (
    <Formik
      render={props => {
        console.log(item)
        return <AboutWrapper>{item}</AboutWrapper>
      }}
    />
  )
}
export default Shop
