import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  componentWillMount() {
    window.location = "/";
  }

  render() {
    return (
      <h1>Загрузка...</h1>
    );
  };
}
