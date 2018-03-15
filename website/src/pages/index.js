import React, { Component } from 'react';
import appStoreImage from '../images/appstore.svg';
import cn from 'classnames';
import styles from './index.module.css';

export default class IndexPage extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1);

    localStorage.setItem('page', '/');
  }

  renderAppStore() {
    const { loaded } = this.state;

    return (
      <a href="https://itunes.apple.com/ru/app/watchcards/id1358392937?mt=8">
        <img className={cn(styles.appstore, {[styles.appStoreLoaded]: loaded})} src={appStoreImage} alt="скачайте в app store"/>
      </a>
    );
  }

  renderCopyright() {
    const { loaded } = this.state;

    return (
      <span className={cn('nikbelikov', {visible: loaded})}>2018 &copy; <a href="http://nikbelikov.ru/" target="_blank" rel="noopener noreferrer">nikbelikov.ru</a></span>
    );
  }

  render() {
    return(
      <section className={styles.wrapper}>
        {this.renderAppStore()}
        {this.renderCopyright()}
      </section>
    );
  }
}
