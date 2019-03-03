// Generic list display of grocery items 

import React from 'react';

// import data source

import { FlatList, Button, View, TouchableHighlight} from 'react-native';
// general renderItem function
import { renderRow } from '../lib/general'; // general function for rendering a list item

// local imports
import IconButton from '../components/IconButton';



export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dataSource: {}
    }
  }

  static navigationOptions = {
    headerTitle: 'Test Screen',
    headerRight: (
      <IconButton size={25} color="#FFF" />
    ),
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTitleStyle: {
      color: '#FFF'
    }
  };

  // You need to bind your react class context into your function
  // Or else will get _this2 error for setState (react class context missing in function)
  getAllWalmartItems(){ // response is an object, needs to be converted to json
    
    return fetch('http://192.168.2.64:3000/api/walmart')
      .then((response) => {
          // Alert.alert(JSON.stringify(response));
          return response.json();
        })
      .then((responseJson) => {
        // Alert.alert("Gotten data back as json...");
        // Alert.alert(JSON.stringify(responseJson));
        
        this.setState({
          dataSource: responseJson
        });
        // this.setState({
        //   dataSource: responseJson,
        // }, function(){

        // });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    return (
      <View>
        <View>
          <Button
            onPress={this.getAllWalmartItems.bind(this)}
            title="Get Walmart Items"
          />
          {/* <Text>{item.upc}, {item.price}</Text>} */}
            <FlatList
              data={this.state.dataSource}
              renderItem={renderRow}
              keyExtractor={item => (item.upc).toString()}
            />
        </View>
      </View>
    );
  }

}