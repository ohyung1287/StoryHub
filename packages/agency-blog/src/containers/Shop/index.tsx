import React, { Component } from "react"
import * as Yup from "yup"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Web3 from "web3"
import axios from "axios"

import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails } from "./style"
export default class FormPage extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      storeList: null,
    }
  }
  componentWillMount() {
    axios
      .get(`http://localhost:8080/getOnStoreTokens/`)
      .then(res => {
        this.setState({ storeList: res.data })

        // console.log(item)
      })
      .catch(err => alert(err))
  }
  render() {
    let item = []
    var storeList = this.state.storeList
    if (storeList != null)
      for (var i = 0; i < storeList.length; i++) {
        item.push(
          <AboutWrapper>
            <AboutPageTitle>{storeList[i].name}</AboutPageTitle>
            <AboutDetails>
              <div>artist:{storeList[i].artist}</div>
              <div>descrption:{storeList[i].description}</div>
              <div>realart:{storeList[i].realart}</div>
              <div>thumnail:{storeList[i].thumnail}</div>
              <div>timestamp:{storeList[i].timestamp}</div>
              <div>id:{storeList[i].id}</div>
            </AboutDetails>
            <Button title="Buy"></Button>
          </AboutWrapper>
        )
      }
    return (
      <AboutWrapper>
        <AboutPageTitle>Store</AboutPageTitle>
        {item}
      </AboutWrapper>
    )
  }
}
/**
 *
 *
 */
