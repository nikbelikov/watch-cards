import React, { Component } from 'react';
import Link from 'gatsby-link';
import watchImage from '../images/watch.svg';
import questionImage from '../images/question.svg';
import downloadImage from '../images/download.svg';
import cn from 'classnames';
import helpers from '../shared/helpers';
import styles from './index.module.css';

export default class IndexPage extends Component {
  state = {
    watch: ['small', 'big'][helpers.randomInteger(0, 1)],
    position: ['top', 'bottom'][helpers.randomInteger(0, 1)],
    color: ['ffea00', 'ffea00', '00d8ff', '00fe1e', 'ff782e', 'ff5ace'][helpers.randomInteger(0, 5)],
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1);
  }

  handleDownload = () => {
    const { watch, position, translation, type, color } = this.state;

    window.location = `http://watchcards.ru/kits/${type}/${watch}-${position}-${color}-tr_${translation}.zip`;

    setTimeout(() => {
      window.location = '/wtf';
    }, 1000);
  };

  renderThemes() {
    const { loaded } = this.state;

    return (
      <div className={cn('themes', {visible: loaded})}>
        <ul>
          <li>
            <Link to="/">Неправильные глаголы английского языка</Link>
          </li>
          <li>Страны и их столицы</li>
        </ul>
      </div>
    );
  }

  renderWatch() {
    const { watch, position, color, loaded } = this.state;

    return (
      <div className={cn('watch-wrapper', {visible: loaded})}>
        <img className={cn('watch', {'watch-large': watch === 'big'})} src={watchImage} alt="watch"/>
        <img
          className="watch-screenshot"
          src={require(`../images/countries/big_${position}_#${color}/0.png`)}
          alt="watch screenshot"
        />
      </div>
    );
  }

  renderParams() {
    const { watch, position, translation, type, color, loaded } = this.state;

    return (
      <div className={cn('params', {visible: loaded})}>
        <ul className="params-list">
          <li
            className={cn({active: watch === 'small'})}
            onClick={() => {this.setState({watch: 'small'})}}
          >
            38mm
          </li>
          <li
            className={cn({active: watch === 'big'})}
            onClick={() => {this.setState({watch: 'big'})}}
          >
            42mm
          </li>
        </ul>
        <ul className="params-list">
          <li
            className={cn({active: position === 'top'})}
            onClick={() => {this.setState({position: 'top'})}}
          >
            наверху
          </li>
          <li
            className={cn({active: position === 'bottom'})}
            onClick={() => {this.setState({position: 'bottom'})}}
          >
            внизу
          </li>
        </ul>
        <ul className="colors-wrapper">
          <li
            className={cn({'color-ffea00': true, active: color === 'ffea00'})}
            onClick={() => {this.setState({color: 'ffea00'})}}
          ><span></span>
          </li>
          <li
            className={cn({'color-00d8ff': true, active: color === '00d8ff'})}
            onClick={() => {this.setState({color: '00d8ff'})}}
          >
            <span></span>
          </li>
          <li
            className={cn({'color-00fe1e': true, active: color === '00fe1e'})}
            onClick={() => {this.setState({color: '00fe1e'})}}
          >
            <span></span>
          </li>
          <li
            className={cn({'color-ff782e': true, active: color === 'ff782e'})}
            onClick={() => {this.setState({color: 'ff782e'})}}
          >
            <span></span>
          </li>
          <li
            className={cn({'color-ff5ace': true, active: color === 'ff5ace'})}
            onClick={() => {this.setState({color: 'ff5ace'})}}
          >
            <span></span>
          </li>
        </ul>
        <p className={styles.text}>Чтобы скачать архив с карточками, вам понадобится зайти на сайт с настольного браузера, так как некоторые мобильные устройства имеют ограничения для загрузки файлов.</p>
        {this.renderDownloadIcon()}
      </div>
    );
  }

  renderDownloadIcon() {
    const { watch } = this.state;

    return (
      <img
        className="download-set"
        onClick={this.handleDownload}
        src={downloadImage}
        alt="download image"
        title={`Скачать набор для Apple Watch ${watch}`}
      />
    );
  }

  renderCopyright() {
    const { loaded } = this.state;

    return (
      <span className={cn('nikbelikov', {visible: loaded})}>2017 &copy; <a href="http://nikbelikov.ru/" target="_blank" rel="noopener noreferrer">nikbelikov.ru</a></span>
    );
  }

  renderHelp() {
    const { loaded } = this.state;

    return (
      <Link to="/wtf">
        <img className={cn(styles.question, {[styles.questionLoaded]: loaded})} src={questionImage} alt="как пользоваться"/>
      </Link>
    );
  }

  render() {
    return(
      <section className={styles.wrapper}>
        {this.renderThemes()}
        {this.renderWatch()}
        {this.renderParams()}
        {this.renderCopyright()}
        {this.renderHelp()}
      </section>
    );
  }
}
