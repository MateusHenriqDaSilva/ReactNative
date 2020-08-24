import React, {Component} from "react"
import Header from "./src/components/Header"
import {View, Text} from 'react-native'
import Post from './src/components/Post'

export default class App extends React.Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena da Silva',
      comments: 'Excelente Foto!'
    }, {
      nickname: 'Rafael Gustavo Pereira',
      comments: 'muito ruim! Faco melhor...'
    }]
    return (
      <View style={{ flex:1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} 
          comments={comments} />
      </View>
    )
  }
}

