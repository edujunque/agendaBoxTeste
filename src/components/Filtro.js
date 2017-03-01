import { Text,  View} from 'react-native';
import React, { Component } from 'react';

import DropDown, {  Select,  Option,  OptionList,} from 'react-native-selectme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _canada(province) {

  this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (
      <View>
           <Text>Selected Canadas province</Text>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option value = {{id : "alberta"}}>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <Text>Selected Canadas province: {this.state.canada}</Text>

          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}