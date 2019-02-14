import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ResultBox extends Component{
    render(){
        return(
            <Text style={styles.resultbox}>{this.props.result}</Text>
        );
    }
}
const styles = StyleSheet.create({
    resultbox:{
        flex:1,
        textAlign:'right',
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:'white',
        fontSize:32,
        color:'#212121'
    }
})