
import React,{Component} from 'react';
import {View,TextInput, Button,StyleSheet,Text,Image,Alert} from 'react-native';

export default class LoGin extends Component {
    static navigationOptions = {
      title: 'Chi Tiết',
    };
    
    
        
      
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex:10,backgroundColor:'pink'}}>
          <View style={{flex:8,marginLeft:30,marginTop:20}}>
            <Image
          style={{width: 150, height: 250,marginLeft:90}}
          source={{uri:this.props.navigation.getParam('linkanh') }}/>
            <Text style={styles.text}>Id sách:{this.props.navigation.getParam('idsach')}</Text>
            <Text style={styles.text}>Tên sách: {this.props.navigation.getParam('tensach')}</Text>
            <Text style={styles.text}>Thể loại: {this.props.navigation.getParam('theloai')}</Text>
            <Text style={styles.text}>Nhà xuất bản: {this.props.navigation.getParam('nhaxuatban')}</Text>
            <Text style={styles.text}>Giá:{this.props.navigation.getParam('gia')} VNĐ</Text>
            </View>
            
            <View style={{flex:2,flexDirection:"row",marginTop:30}}>
                <View style={{flex:1}}>
                <Text
                   style={styles.nutbam}
                    onPress={() =>{
                        navigate('SuaSach',{idsach:this.props.navigation.getParam('idsach'),tensach:this.props.navigation.getParam('tensach'),
                            theloai:this.props.navigation.getParam('theloai'),nhaxuatban:this.props.navigation.getParam('nhaxuatban'),
                            gia:this.props.navigation.getParam('gia'),linkanh:this.props.navigation.getParam('linkanh')})         
                            }
        
                    }
                >Sửa</Text>
               </View>
                <View style={{flex:1}}>
                <Text
                  style={styles.nutbam}
                    onPress={() =>{
                      Alert.alert(
                        'Xóa thông tin sách',
                        'Bạn có muốn xóa thông tin cuốn sách này không ?',
                        [
        
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => 
                          {
                            fetch("http://192.168.12.108/quanlisach/XoaSach.php",
                            {method:"POST",body:JSON.stringify({IdSach:this.props.navigation.getParam('idsach')})})
                            .then((reponse)=>reponse.text())
                            .then((reponseData)=>{
                             alert(reponseData)
                             navigate('DanhSach')
                         })
                         .done()}},
                        ],
                        {cancelable: false},
                      );
                         
        
                    }}
                >Xóa</Text>
                </View>
            </View>
            
        </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:'red',
        marginTop:5,
    },
    nutbam:{
      textAlign:'center',
      borderWidth:1,
      height:40,
      width:150,
      fontSize:25,
      marginLeft:30,
      backgroundColor:'cyan',
      borderRadius:20,
      marginTop:30
    },
  });