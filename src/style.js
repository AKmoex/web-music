import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
  src: url('./static/iconfont/iconfont.eot?t=1599378330310'); /* IE9 */
  src: url('./static/iconfont/iconfont.eot?t=1599378330310#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALIAAsAAAAABnwAAAJ6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBBIEYATYCJAMICwYABCAFhG0HNBvCBREVjFWyj8QU7obK4bEJrkwrIxXfxAO0X+3Nn9njr5xoQi1eRDyJSxerJEjuVa1eVDSZJfLe/6kZ9oUOKAvzPPEuzbw/My/XRaWapkQFLGB94t7p/w2gQOYDKZcxBo01aWKAceddQHtjtIULKLDIU4FdxB6M0wSU9DdWmDZj5kK5BJMCws5tW9bJcz5JkpK5oKZmZUrhmII8O5J18BwNPx9+yUJOphChbO7m6RtN+tpAafFw9bCVPsFPwK0vIGIsEmFhbWy2KEiMqMSbDEaSgl8bqlXeKuzVJEh/HQoroC8rvieJK73Vb2YgIWIwJo56MbFUqexZfPzu2dZF1x5c2N3Ts6S7e3Fn58KurkXdXxf3fFvS9WVR5+dxF0uHdlYf3/n32lV3+0lh7qXY3Z0ukcA3XQpTZQyErPvwOkUoX5PASU9vUhbTa/aXsmgSqO7xXTwsIND+4lRHVT/uf15O4P3eu6fDMdU9iYeR798e+E+dUg5JliGWJbRUB2QGi+evKCmh6nGuJp/G6ltvKhXkWm/N0Ue/FFFuKJnoY1FQ1o4aOepElIxRri9rRkIhFTHam0HQ4INMnReIGnzJRP+hoM0fNRpCiJLFoXnHsuHBiKmEDWMP7RNMN0/SsbGIig+orkNDWVnIvCBtJghplBSTJU5Ic8zZbipjliBpHqFgzsNhmGGh2WLHkWZe8jiWdVeKunn0hKkIajDUA60nYHRmE+m3ZqL0/gOkXA0a1NLQ4L9AZGO6B6lI0oMs1VOvhnu5ZHOjZBiTgERmI1Aww9BgMANL/TALdVhEj4gscjE1k33V0fra8eu2QQkMWaBeUWlzM6m+scY3eR4AAA==') format('woff2'),
  url('./static/iconfont/iconfont.woff?t=1599378330310') format('woff'),
  url('./static/iconfont/iconfont.ttf?t=1599378330310') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/iconfont/iconfont.svg?t=1599378330310#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfangdajing:before {
  content: "\\e610";
}
`;

export default GlobalStyle;
