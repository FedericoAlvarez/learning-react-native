import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Navigator,NavigatorIOS } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class MyScene extends Component {

  render(){
    return (
      <Navigator
        ref='elNavigator'
        initialRoute={{name: 'list'}}
        renderScene={(route, navigator) => this.tuVieja(route, navigator)}
        style={{flex: 1}}
        />
    );
  }

  tuVieja(route, navigator){
    if(route.name == 'list'){
      return this.renderListView();
    }else if(route.name == 'add'){
      return this.renderAddTodoView();
    }else{
      return this.renderErrorView();
    }
  }

  _onForward() {
      this.refs.navigator.push({
        name: 'add',
      });
    }

  renderListView(){
    return(
      <View>
        <NavigationBar title={{title:'Hello, world'}} rightButton={this.props.navigator.push({name: 'add'})} />
        <Text style={styles.welcome}>Pantalla donde voy a mostrar la lista de items</Text>
      </View>
    );
  }

  renderAddTodoView(){
    return(
      <View>
        <Text style={styles.welcome}>Pantalla donde voy a agregar items</Text>
      </View>
    );
  }

  renderErrorView(){
    return(
      <View>
        <Text style={styles.welcome}>ERROR</Text>
      </View>
    );
  }

}

const titleConfig = {
  title: 'Hello, world',
};

const rightButtonConfig = {
  title: 'Next',
  handler: () => this.refs.navigator.push({name: 'add'}),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
