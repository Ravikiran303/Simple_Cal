import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight} from 'react-native'

export default class Key extends Component{
    constructor(props){
        super(props)

        this._onPress = this._onPress.bind(this);
    }
    _onPress(){
        this.props.echoSymbol(this.props.symbol);
    }
    render(){
        return(
            <TouchableHighlight
               style={this.props.op ?[styles.key,styles.opkey] : style.key}
               onPress={this._onPress}
            >
                <View>
                    <Text style={[styles.keytext,this.props.op && styles.opkeytext]}>{this.props.symbol}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    Key:{
        borderRadius:30,
        backgroundColor:'#eaeaea',
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    keytext:{
        fontSize:20
    },
    opkey:{
        backgroundColor:'#989898',
        marginRight:10  
    },
    opkeytext:{
        color:'#ffffff'
    }
})