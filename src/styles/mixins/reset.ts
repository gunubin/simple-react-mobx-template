import {css} from 'styled-components'

export default css`
  html {
    font-size: 16px;
    line-height: 1.8;
    -webkit-text-size-adjust: none;
  }

  body {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
    font-family: 'Signika', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka,
      'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS P Gothic', Verdana, sans-serif;
    -webkit-backface-visibility: hidden;
    overflow-y: scroll;
    letter-spacing: 1px;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  svg {
    -webkit-backface-visibility: hidden;
  }

  p,
  li,
  dt,
  dd,
  th,
  td,
  pre {
    line-break: strict;
    word-break: break-strict;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  p,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  em {
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  select:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  select::-ms-expand {
    display: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    visibility: hidden;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  hr {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  img {
    vertical-align: middle;
  }
`
