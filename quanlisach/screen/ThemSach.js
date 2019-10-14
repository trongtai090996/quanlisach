
import React,{Component} from 'react';
import {View,TextInput, Button,StyleSheet,Text,Keyboard} from 'react-native';

export default class LoGin extends Component {
    static navigationOptions = {
      tabBarLabel: 'Thêm sách',
    };
    
    constructor(props){
        super(props);
        this.state={
           tensach:'',theloai:'',nhaxuatban:'',gia:0,linkanh:''
            
        }
        
      }    
      
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <TextInput
                
                style={styles.textinput}
                onChangeText={(text) => this.setState({tensach:text})}
                placeholder={'Nhập tên sách'}
            />
            <TextInput
           
                style={styles.textinput}
                onChangeText={(text) => this.setState({theloai:text})}
                placeholder={'Nhập thể loại'}
            />
            <TextInput
            
                style={styles.textinput}
                onChangeText={(text) => this.setState({nhaxuatban:text})}
                placeholder={'Nhập nhà xuất bản'}
            />
            <TextInput
                keyboardType='numeric'
                style={styles.textinput}
                onChangeText={(text) => this.setState({gia:text})}
                placeholder={'Nhập giá'}
            />
            <TextInput
              
                style={styles.textinput}
                onChangeText={(text) => this.setState({linkanh:text})}
                placeholder={'Nhập link ảnh'}
            />
        
           <Text
           style={styles.nutbam}
            onPress={() =>{
              if(this.state.tensach===''||this.state.theloai===''||this.state.nhaxuatban===''||this.state.gia==0){
                alert("Vui lòng nhập đầy đủ thông tin")
              }else{
                fetch("http://192.168.12.108/quanlisach/ThemSach.php",{method:"POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                TenSach:this.state.tensach,
                TheLoai:this.state.theloai,
                NhaXuatBan:this.state.nhaxuatban,
                Gia:this.state.gia,
                LinkAnh:this.state.linkanh
                })})
                .then((reponse)=>reponse.text())
                .then((reponseData)=>{
                  alert(reponseData)
                })
                .done()
              }
              
          
            }}>
              Thêm thông tin sách
           </Text>
           
        </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'chartreuse'
    },
   textinput:{
    height: 60,
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop:20,
    fontSize:20,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
    backgroundColor:'white'
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