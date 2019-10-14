import React,{Component} from 'react'
import { View, FlatList,Text,Image,TouchableWithoutFeedback,Modal,StyleSheet} from'react-native'
import Swipeout from 'react-native-swipeout'




import moment from 'moment';

export default class DanhSach extends Component{
  static navigationOptions = {
    title: 'Danh sách',
  };
  
  constructor(props){
    super(props);
    this.state={
      dataSource:[],
        
    }
    
  }
  
  renderItem=({item})=>{
    // const {navigate} = this.props.navigation;        
      return(       
        <TouchableWithoutFeedback onPress={() => {
          this.props.navigation.navigate('ChiTiet',{idsach:item.idsach,tensach:item.tensach,
          theloai:item.theloai,nhaxuatban:item.nhaxuatban,gia:item.gia,linkanh:item.linkanh})         
          }}>            
          <View style={{borderWidth:2,backgroundColor:'cyan',borderColor:'yellow',borderRadius:20,marginTop:20}}>
            <Text style={{fontSize:20, marginLeft:10}}>Tên sách: {item.tensach}</Text>
            <Text style={{fontSize:20, marginLeft:10}}>Thể loại: {item.theloai}</Text>
            <Text style={{fontSize:20, marginLeft:10}}>Nhà xuất bản: {item.nhaxuatban}</Text>
            <Text style={{fontSize:20, marginLeft:10}}>Giá: {item.gia} VND</Text>        
          </View>          
        </TouchableWithoutFeedback>                               
      )      
  }

  componentDidMount(){
    const url='http://192.168.12.108/quanlisach/danhsachsach.php';
    fetch(url)
    .then((reponse)=>reponse.json())
    .then((reponseJson)=>{
      this.setState({dataSource:reponseJson})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    const {navigate} = this.props.navigation;   
    return(    
      <View style={{flex:1,backgroundColor:'darksalmon'}}>         
        <Text
          style={styles.nutbam}
          onPress={()=>navigate('ThemSach')}>
            Thêm sách
        </Text>
                  
        <FlatList       
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.idsach}
        />
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  nutbam:{
    textAlign:'center',
    borderWidth:1,
    height:40,
    width:220,
    fontSize:25,
    marginLeft:100,
    backgroundColor:'cyan',
    borderRadius:20,
    marginTop:30
  },
 });

