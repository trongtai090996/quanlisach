
import React,{Component} from 'react';
import {View,TextInput, Button,StyleSheet,Alert,Text} from 'react-native';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';

export default class LoGin extends Component {
    static navigationOptions = {
      title: 'Đăng nhập',
    };
    
    constructor(){
        super();
        this.state={username:'',password:'',
        }        
    }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:1,justifyContent:"center",backgroundColor:'palegreen'}}>
          <TextInput style={styles.textinput} 
            placeholderTextColor='fuchsia' placeholder='Nhập tài khoản'
            onChangeText={(username) => this.setState({username:username})}
            />
          <TextInput style={styles.textinput} 
            placeholderTextColor='fuchsia' secureTextEntry={true} placeholder='Nhập mật khẩu'
            onChangeText={(password) => this.setState({password:password})}/>
          <Text
            style={styles.nutbam}
            onPress={() => {                                    
              if(this.state.username===''||this.state.password===''){
                alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu")
              }else{
                fetch('http://192.168.12.108/quanlisach/login.php', 
                {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password                          
                  })                     
                })
                .then((response) => response.json())
                .then((responseJson) => {
                  if(responseJson === 'Trung Khop')
                  {
                    this.props.navigation.navigate('DanhSach', { username: this.state.username });
                  }
                  else{
                    Alert.alert('Lỗi' ,responseJson);
                  }                   
                })
                .catch((error) => {
                  console.error(error);
                });
            }                                                                        
          }
                
        }
                        
                    
            >Đăng nhập</Text>
        </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    textinput:{
        textAlign:"center",
        fontSize:20,
        borderWidth:5,
        color:'red',
        borderColor:'yellow',
        
        marginBottom:20,
        borderRadius:20,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'linen',
        
    },
    nutbam:{
      textAlign:'center',
      borderWidth:1,
      height:40,
      width:320,
      fontSize:25,
      marginLeft:50,
      backgroundColor:'cyan',
      borderRadius:20,
      marginTop:30
    },
  });