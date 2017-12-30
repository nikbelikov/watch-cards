import React, { Component } from 'react';
import Link from 'gatsby-link';
import TextContent from '../components/shared/TextContent/';
import styles from './wtf.module.css';
import watchApp from '../images/watch-app.jpg';
import photoApp from '../images/photo-app.jpg';
import selectWatchface from '../images/select-watchface.jpg';
import newWatchface from '../images/new-watchface.png';
import watchfaceSettings from '../images/watchface-settings.png';
import realPhoto from '../images/real.jpg';

export default class WtfPage extends Component {
  state = {
    backUrl: '/',
  };

  componentDidMount() {
    this.setState({
      backUrl: localStorage.getItem('page') || '/',
    });
  }

  render() {
    return (
      <TextContent>
        <h1 className={styles.title}>Как пользоваться?</h1>
        <p>1. После выкачивания .zip архива нужно его распаковать и добавить папку с фотографиями в приложение <a href="https://www.apple.com/ru/macos/photos/" target="_blank" rel="noopener noreferrer">Фото</a> на своем Mac, либо через веб-браузер на сайте <a href="http://icloud.com/" target="_blank" rel="noopener noreferrer">icloud.com</a>.</p>
        <p>
          <img className={styles.largeImage} src={photoApp} alt="photo app"/>
        </p>
        <p>2. Далее в приложении Watch на своем iPhone перейдите в раздел <span className={styles.orange}>Мои часы</span> -> Фото и выберите альбом для синхронизации, где хранятся карточки. Также можете выставить максимальное количество фото равным 500 штук для удобства.</p>
        <p>
          <img className={styles.mobileImage} src={watchApp} alt="watch app"/>
        </p>
        <p>3. Наконец, в разделе <span className={styles.orange}>Циферблаты</span> на iPhone выберите циферблат с названием Фото и настройте параметры (часы сверху или снизу, показывать ли дополнительную информацию и, если да, то какую).</p>
        <p>
          <img className={styles.mobileImage} src={selectWatchface} alt="select watchface"/>
        </p>
        <p>Вы также можете добавить новый циферблат с помощью интерфейса Apple Watch. Для этого сильно нажмите на экран, находясь на любом из циферблатов, пролистайте вправо список добавленных циферблатов и нажмите на иконку со знаком "+".</p>
        <p>
          <img className={styles.watchImage} src={newWatchface} alt="new watchface"/>
        </p>
        <p>Настройте все нужные параметры и нажмите на колесико Digital Crown.</p>
        <p>
          <img className={styles.watchImage} src={watchfaceSettings} alt="watchface settings"/>
        </p>
        <p>Все готово! Теперь каждый раз, поднимая запястье, вы будете видеть одну из карточек.</p>
        <p>
          <img className={styles.largeImage} src={realPhoto} alt="real photo"/>
        </p>
        <Link to={this.state.backUrl}>Перейти к конфигуратору</Link>
      </TextContent>
    );
  }
}
