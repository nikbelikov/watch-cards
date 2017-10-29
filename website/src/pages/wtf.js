import React from 'react';
import Link from 'gatsby-link';
import watchApp from '../images/watch-app.jpg';
import photoApp from '../images/photo-app.png';
import selectWatchface from '../images/select-watchface.jpeg';
import newWatchface from '../images/new-watchface.png';
import watchfaceSettings from '../images/watchface-settings.png';
import realPhoto from '../images/real.jpg';

const WtfPage = () => (
  <div className="text-wtapper">
    <h1>Как пользоваться?</h1>
    <p>1. После выкачивания .zip архива нужно его распаковать и добавить папку с фотографиями в приложение <a href="https://www.apple.com/ru/macos/photos/" target="_blank" rel="noopener noreferrer">Фото</a> на своем Mac, либо через веб-браузер на сайте <a href="http://icloud.com/" target="_blank" rel="noopener noreferrer">icloud.com</a>.</p>
    <p>
      <img className="large-screenshot" src={photoApp} alt="photo app"/>
    </p>
    <p>2. Далее в приложении Watch на своем iPhone перейдите в раздел <span className="orange-text">Мои часы</span> -> Фото и выберите альбом для синхронизации, где хранятся карточки. Также можете выставить Макс. кол-во фото равным 500 фото для удобства.</p>
    <p>
      <img className="mobile-app-screenshot" src={watchApp} alt="watch app"/>
    </p>
    <p>3. Наконец, в разделе <span className="orange-text">Циферблаты</span> на iPhone выберите циферблат с названием Фото и настройте параметры (часы сверху или снизу, показывать ли дополнительную информацию и, если да, то какую).</p>
    <p>
      <img className="mobile-app-screenshot" src={selectWatchface} alt="select watchface"/>
    </p>
    <p>Вы также можете добавить новый циферблат с помощью интерфейса Apple Watch. Для этого сильно нажмите на экран, находясь на любом из циферблатов, пролистайте вправо список добавленных циферблатов и нажмите на иконку со знаком "+".</p>
    <p>
      <img className="watch-app-screenshot" src={newWatchface} alt="new watchface"/>
    </p>
    <p>Настроить все нужные параметры и нажмите на колесико Digital Crown.</p>
    <p>
      <img className="watch-app-screenshot" src={watchfaceSettings} alt="watchface settings"/>
    </p>
    <p>Все готово! Теперь каждый раз, когда вы будете поднимать запястье, чтобы посмотреть время, карточки будут случайным образом показываться вам, чтобы вы лучше запомнили нужную информацию.</p>
    <p>
      <img className="large-screenshot" src={realPhoto} alt="real photo"/>
    </p>
    <Link to="/">Перейти к конфигуратору</Link>
  </div>
);

export default WtfPage
