import React from "react";
import favicon16x16 from './images/favicons/favicon-16x16.png';
import favicon32x32 from './images/favicons/favicon-32x32.png';
import appleTouchIcon from './images/favicons/apple-touch-icon.png';
import manifest from './images/favicons/manifest.json';
import safariTabIcon from './images/favicons/safari-pinned-tab.svg';

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Карточки для Apple Watch"/>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16}/>
        <link rel="manifest" href={manifest}/>
        <link rel="mask-icon" href={safariTabIcon} color="#5bbad5"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Watchcards.ru - Карточки для Apple Watch</title>
        <meta property="og:url" content="http://watchcards.ru/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Watchcards.ru"/>
        <meta property="og:image" content={appleTouchIcon}/>
        <meta property="og:description" content="Карточки для Apple Watch"/>
        <meta property="og:site_name" content="Watchcards.ru"/>
        {this.props.headComponents}
        {css}
      </head>
      <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
      {this.props.postBodyComponents}
      </body>
      </html>
    )
  }
}
