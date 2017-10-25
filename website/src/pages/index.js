import React, { Component } from 'react'
import watchImage from '../images/watch.svg';
import cn from 'classnames';

export default class IndexPage extends Component {
  state = {
    watch: '38mm', // '38mm' || '42mm'
    position: 'top', // 'top' || 'bottom'
    translation: true,
    type: 'popular', // 'popular' || 'extended'
  };

  render() {
    const { watch, position, translation, type } = this.state;

    return(
      <section className="content-wrapper">
        <div className="themes">
          <ul>
            <li>Неправильные глаголы английского языка</li>
          </ul>
        </div>
        <div className="watch-wrapper">
          <img className={cn('watch', {'watch-large': watch === '42mm'})} src={watchImage} alt="watch"/>
        </div>
        <div className="params">
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
        </div>
      </section>
    );
  }
}
