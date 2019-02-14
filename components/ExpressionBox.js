import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ExpressionBox extends Component{
    render(){
        return(
            <Text style={styles.expressionbox}>{this.props.expression}</Text>
        );
    }
}
const styles = StyleSheet.create({
    expressionbox:{
        flex:1,
        textAlign:'right',
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:'white',
        fontSize:32,
        color:'#212121'
    }
})