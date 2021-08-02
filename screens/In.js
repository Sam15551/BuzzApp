import {React} from 'react';
import { render } from 'react-dom';
import { Text,StyleSheet,View } from 'react-native';

export default class In extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <Text>instagram</Text>   
            </View>
        );
    }
}

const styles=StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignContent:'center',
      }
})