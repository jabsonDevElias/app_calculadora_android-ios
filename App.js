import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Botao from './Botao';

export default function App() {
  console.disableYellowBox = true;
  const [firstNumber,setFirstNumber] = useState(0);
  const [secondNumber,setSecondNumber] = useState(0);
  const [sinal,setSinal] = useState("");

  const [stringCalculo,setStringCalculo] = useState("0");

  var numeros = [];

  for(var i = 0; i <= 9; i++){
     numeros.push(i);
  }
  

  function logicaCalculadora(n){
  if(sinal == ''){
    setFirstNumber(parseInt(firstNumber.toString()+n.toString()));
    setStringCalculo(parseInt(firstNumber.toString()+n.toString()))
  }

  if(n == '/' || n =="*" || n == '+' || n=='-' && secondNumber == 0){
    setStringCalculo(firstNumber.toString() + n);
    setSinal(n);
  }

  if(sinal != ''){
    setSecondNumber(parseInt(secondNumber.toString()+n.toString()));
    setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
  }

  if(n == '='){
    let resultado = 0;
    if(sinal == '+'){
      resultado = firstNumber+secondNumber;
    }else if(sinal == '-'){
      resultado = firstNumber-secondNumber;
    }
    else if(sinal == '/'){
      resultado = firstNumber/secondNumber;
    }
    else if(sinal == '*'){
      resultado = firstNumber*secondNumber;
    }

    setStringCalculo(resultado);
    setSinal('');
    setFirstNumber(resultado);
    setSecondNumber(0);
  }
}

  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <StatusBar hidden/>
        <View style={styles.Topo}><Text style={{fontSize: 24,color:'white'}}>{stringCalculo}</Text></View>
        <View style={{flexDirection:'row',height:'16.6%',alignItems:'center'}}>
          <TouchableOpacity style={{width:'20%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}} onPress={()=>logicaCalculadora('+')}><Text style={{fontSize:24,textAlign:'center',color:'#fff'}}>+</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'20%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}} onPress={()=>logicaCalculadora('-')}><Text style={{fontSize:24,textAlign:'center',color:'#fff'}}>-</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'20%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}} onPress={()=>logicaCalculadora('/')}><Text style={{fontSize:24,textAlign:'center',color:'#fff'}}>/</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'20%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}} onPress={()=>logicaCalculadora('*')}><Text style={{fontSize:24,textAlign:'center',color:'#fff'}}>*</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'20%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}} onPress={()=>logicaCalculadora('=')}><Text style={{fontSize:24,textAlign:'center',color:'#fff'}}>=</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',borderTopWidth:2,height:'66.8%'}}>
            {
              numeros.map((e)=>{
                return(<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>)
              })
            }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Topo:{
    padding:10,
    backgroundColor:'rgb(20,20,20)',
    height:'16.6%',
    justifyContent:'center',
    paddingLeft:20
  }
});
