import React, {Component} from 'react'
import {
  View,  Text,
} from 'react-native'

//you can be able to import the content of quotes.json like this
import * as list from './quotes'
//list will be the variable containing the object

export default class App extends Component{
  state={
    quotes: list.quotes, //if you check the way the object is, list.quotes access the array of quotes
  }

  render(){
    let {currQuote, currAuthor, currColor} = this.state

    return(
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
          {this.state.quotes[10].quote +' by '+ this.state.quotes[10].author}
          {/*
            Here we're accessing the object at index 10
          */}
        </Text>
      </View>
      )
  }
}
