import React, { Component } from 'react';
import api from '~/services/api'

// import { Container } from './styles';

export default class Main extends Component {
  componentDidMount(){
    api.get('/test')
  }

  render() {
    return <div>Main</div>;
  }
}
