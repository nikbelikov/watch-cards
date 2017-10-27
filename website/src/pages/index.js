import React, { Component } from 'react'
import watchImage from '../images/watch.svg';
import downloadImage from '../images/download.svg';
import cn from 'classnames';

export default class IndexPage extends Component {
  state = {
    watch: '38mm', // '38mm' || '42mm'
    position: 'top', // 'top' || 'bottom'
    translation: true,
    type: 'popular', // 'popular' || 'extended'
    color: 'ffea00', // 'ffea00', '00d8ff', '00fe1e', 'ff782e'
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1000);
  }

  render() {
    const { watch, position, translation, type, color, loaded } = this.state;

    return(
      <section className="content-wrapper">
        <div className={cn('themes', {visible: loaded})}>
          <ul>
            <li className="active">Неправильные глаголы английского языка</li>
            <li>Скоро: страны и их столицы</li>
          </ul>
        </div>
        <div className="watch-wrapper">
          <img className={cn('watch', {'watch-large': watch === '42mm'})} src={watchImage} alt="watch"/>
          <img
            className="watch-screenshot"
            src={require(`../images/${type}/42mm-${position}-${color}-tr_${translation}/0.png`)}
            alt="watch screenshot"
          />
        </div>
        <div className={cn('params', {visible: loaded})}>
          <ul className="params-list">
            <li
              className={cn({active: watch === '38mm'})}
              onClick={() => {this.setState({watch: '38mm'})}}
            >
              38mm
            </li>
            <li
              className={cn({active: watch === '42mm'})}
              onClick={() => {this.setState({watch: '42mm'})}}
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
          <ul className="params-list">
            <li
              className={cn({active: translation})}
              onClick={() => {this.setState({translation: true})}}
            >
              с переводом
            </li>
            <li
              className={cn({active: !translation})}
              onClick={() => {this.setState({translation: false})}}
            >
              без перевода
            </li>
          </ul>
          <ul className="params-list">
            <li
              className={cn({active: type === 'popular'})}
              onClick={() => {this.setState({type: 'popular'})}}
            >
              популярные
            </li>
            <li
              className={cn({active: type === 'extended'})}
              onClick={() => {this.setState({type: 'extended'})}}
            >
              расширенный набор
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
          </ul>
          <a
            href={`http://watchcards.ru/kits/${type}/${watch}-${position}-${color}-tr_${translation}.zip`}
            className="download-set"
          >
            <img
              src={downloadImage}
              alt="download image"
              title={`Скачать набор для Apple Watch ${watch}`}
            />
          </a>
        </div>
      </section>
    );
  }
}
