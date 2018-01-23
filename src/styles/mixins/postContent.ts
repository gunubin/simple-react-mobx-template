import {css} from 'styled-components'
import media from './media'

const postContent = css`
  h1,
  h2,
  h3 {
    margin-bottom: 1em;
    font-size: 12px;
    color: #4e4e4e;
    &:before {
      content: '';
      position: relative;
      top: -1px;
      margin-right: 0.7em;
      display: inline-block;
      vertical-align: middle;
      border-top: 2px solid #999;
      width: 20px;
      height: 2px;
      @include mq-md {
        width: 16px;
        margin-right: 15px;
      }
    }
    ${media.tablet`
      font-size: 14px;
      color: #3C3C3C;
    `};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 2em 0 0.8em;
    ${media.tablet`
      padding: 2em 0 0.7em;
    `};
  }
  img {
    margin: 10px 0;
    max-width: 100%;
    height: auto;
  }
  iframe {
    max-width: 100%;
  }
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  dt {
    font-weight: 700;
  }
  b,
  strong {
    font-weight: 700;
  }
  a {
    word-wrap: break-word;
    color: #000;
  }
  ul {
    list-style-type: disc;
    li {
      list-style-type: inherit;
      margin-left: 2em;
    }
  }
  ol {
    list-style-type: decimal;
    li {
      list-style-type: inherit;
      margin-left: 2em;
    }
  }
  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    tr {
      th,
      td {
        padding: 1em;
        ${media.tablet`
          padding: 0.5em;
        `};
      }
    }
    border: 1px solid #ddd;
    tr {
      th,
      td {
        border: 1px solid #ddd;
      }
    }
  }
`

export default postContent
