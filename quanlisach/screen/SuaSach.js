
import React,{Component} from 'react';
import {View,TextInput, Button,StyleSheet,Text,Alert} from 'react-native';

export default class SuaSach extends Component {
    static navigationOptions = {
      title: 'Sửa thông tin sách',
    };
    
    constructor(props){
        super(props);
        this.state={
           tensach:this.props.navigation.getParam('tensach'),
           theloai:this.props.navigation.getParam('theloai'),
           nhaxuatban:this.props.navigation.getParam('nhaxuatban'),
           gia:this.props.navigation.getParam('gia'),
           linkanh:this.props.navigation.getParam('linkanh'),
            
        }
        
      }
        
      
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:10,backgroundColor:'chartreuse'}}>
            <View style={{flex:9}}>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{flex:2}}><Text style={styles.text}>Tên sách</Text></View>
                <View style={{flex:3}}>
                    <TextInput
                    multiline={true}
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({tensach:text})}
                        
                        placeholder={this.props.navigation.getParam('tensach')}
                        />
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{flex:2}}><Text style={styles.text}>Thể loại:</Text></View>
                <View style={{flex:3}}>
                <TextInput
                style={styles.textinput}
                onChangeText={(text) => this.setState({theloai:text})}
                placeholder={this.props.navigation.getParam('theloai')}
            />
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{flex:2}}><Text style={styles.text}>Nhà xuất bản:</Text></View>
                <View style={{flex:3}}>
                <TextInput
                style={styles.textinput}
                onChangeText={(text) => this.setState({nhaxuatban:text})}
                placeholder={this.props.navigation.getParam('nhaxuatban')}
            />
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{flex:2}}><Text style={styles.text}>Giá( VNĐ):</Text></View>
                <View style={{flex:3}}>
                <TextInput
                keyboardType='numeric'
                style={styles.textinput}
                onChangeText={(text) => this.setState({gia:text})}
                placeholder={this.props.navigation.getParam('gia')}
            />
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{flex:2}}><Text style={styles.text}>Link ảnh:</Text></View>
                <View style={{flex:3}}>
                <TextInput
                multiline={true}
                style={{height: 120, 
                  borderColor: 'cadetblue', 
                  borderWidth: 1 ,
                  color:'red',
                  fontSize:20,
                  backgroundColor:'white',
                marginRight:10}}
                onChangeText={(text) => this.setState({linkanh:text})}
                placeholder={this.props.navigation.getParam('linkanh')}
            />
                </View>
            </View>
            
            <Text
          style={styles.nutbam}
          onPress={() =>{
            fetch("http://192.168.12.108/quanlisach/SuaSach.php",{method:"POST",
            body:JSON.stringify({IdSach:this.props.navigation.getParam('idsach'),
            TenSach:this.state.tensach,TheLoai:this.state.theloai,NhaXuatBan:this.state.nhaxuatban,Gia:this.state.gia,LinkAnh:this.state.linkanh})})
            .then((reponse)=>reponse.text())
            .then((reponseData)=>{
                alert(reponseData)
                navigate('DanhSach')
             })
             .catch((error) => {
              console.error(error);
            });
        
          }}
        >Sửa thông tin</Text>
            
            
            </View>
            <View style={{flex:1}}>

            </View>
                       
        </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    text:{
        fontSize:20,
        marginLeft:10
        
    },
    textinput:{
      height: 70, 
      borderColor: 'cadetblue', 
      borderWidth: 1 ,
      color:'red',
      fontSize:20,
      backgroundColor:'white',
      marginRight:10
    },
    nutbam:{
      textAlign:'center',
      borderWidth:1,
      height:40,
      width:300,
      fontSize:25,
      marginLeft:60,
      backgroundColor:'cyan',
      borderRadius:20,
      marginTop:60,
      
    },
  });