import React from 'react';
import { FlatList, TouchableHighlight, Text } from 'react-native';

import routines_data from '../data/routines';

import styles from '../lib/styles';

export default class Routines extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Routines',
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTitleStyle: {
      color: '#FFF'
    }
  });


	render() {
		return (
      <FlatList data={routines_data} renderItem={this.renderItem} />
		);
	}

  // You might also notice that we’ve used the ES6 arrow function syntax for creating the renderItem() function instead of declaring it like so:

  // The reason for this is that we’ll need to bind the method in the constructor if we want the context of this to be this component class when we use this inside the renderItem() method:

  //   constructor(props) {
  //     super(props);
  //     this.renderItem = this.renderItem.bind(this); 
  //   }
  renderItem = ({item}) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight key={item.key} underlayColor="#ccc" onPress={() => {
        navigate('Exercises', {
          'key': item.key,
          'name': item.name
        });
      }} style={styles.list_item}>
        <Text key={item.key}>{item.name}</Text>
      </TouchableHighlight>
    );
  }

}

// Component lifecycle review...

// componentWillReceiveProps – if the component relies on props passed from its parent, this function is called right before the component is re-rendered when the props passed by its parent is changed.
// componentDidMount – called only once during the lifecycle of a component when it has been fully rendered on the screen along with its sub-components.

// componentDidUpdate – called everytime the component and all of its sub-components is fully rendered. We already know that a component is re-rendered everytime a state value which it depends on is updated. So this method is called right after every time that happens.

// Redux Libraries - Global State Management

// Redux or MobX. Using those libraries, you can have a global state which can be accessed from any component. As opposed to the built-in React 
// state which can only be managed within the component where it is declared. Since this is a beginner tutorial, we won’t use any of those libraries.