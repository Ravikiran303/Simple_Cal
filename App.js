/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ExpressionBox from './components/ExpressionBox';
import ResultBox from './components/ResultBox';
import NumPad from './components/NumPad';

const math = require('math.js');

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      expression:'',
      result:'',
      lastExpression:[]
    }
    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
    this._rollbackExpression = this._rollbackExpression.bind(this);
  }

  _assembleExpression(symbol){
    this.setState((prevState) => ({
      lastExpression:[...prevState.lastExpression,prevState.expression],
      expression : prevState.expression + symbol
    }))
  }
  _calculateResult(){
    let result;
    try{
      result = math.eval(this.state.expression);
    }catch{
      result = 'Error';
    }
    this.setState({result:result});
  }
  _rollbackExpression(){
    this.state.expression && this.setState((prevState) =>({
      expression:prevState.lastExpression.pop(),
      lastExpression:prevState.lastExpression
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ExpressionBox expression={this.state.expression}/>
        <ResultBox expression={this.state.result}/>
        <NumPad 
          assembleExpression={this._assembleExpression}
          calculateResult = {this._calculateResult}
          deletePressed = {this._rollbackExpression}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: ConstantSourceNode.statusBarHeight
  },
  
});
