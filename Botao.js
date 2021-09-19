import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao(props){
    return(<View style={{backgroundColor:'black',borderColor:'white',borderWidth:1,width:'33.3%',height:'25%'}}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={{width:'100%',height:'100%',justifyContent:'center'}}><Text style={{textAlign:'center',fontSize:24,color:'white'}}>{props.numero}</Text></TouchableOpacity>
    </View>)
}