(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"155":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),i=_interopRequireDefault(a(50)),n=_interopRequireDefault(a(0)),l=a(49),c=_interopRequireDefault(a(51)),u=_interopRequireDefault(a(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(156);var s=function(e){function AtNoticebar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNoticebar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNoticebar.__proto__||Object.getPrototypeOf(AtNoticebar)).apply(this,arguments)),t="J_"+Math.ceil(1e6*Math.random()).toString(36);return e.state={"show":!0,"animElemId":t,"dura":15},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNoticebar,c.default),o(AtNoticebar,[{"key":"onClose","value":function onClose(){var e;this.setState({"show":!1}),this.props.onClose&&(e=this.props).onClose.apply(e,arguments)}},{"key":"onGotoMore","value":function onGotoMore(){var e;this.props.onGotoMore&&(e=this.props).onGotoMore.apply(e,arguments)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;this.props.marquee&&setTimeout(function(){if(r.default.getEnv()===r.default.ENV_TYPE.WEB){var t=document.querySelector("."+e.state.animElemId).getBoundingClientRect().width/+e.props.speed;e.setState({"dura":t})}else if(r.default.getEnv()===r.default.ENV_TYPE.WEAPP){r.default.createSelectorQuery().in(e.$scope).select("."+e.state.animElemId).boundingClientRect(function(t){var a=t.width,o=a/+e.props.speed,i=r.default.createAnimation({"duration":1e3*o,"timingFunction":"linear"}),n=r.default.createAnimation({"duration":0,"timingFunction":"linear"}),l=function animBody(){n.translateX(0).step(),e.setState({"animationData":n.export()}),setTimeout(function(){i.translateX(-a).step(),e.setState({"animationData":i.export()})},100)};l(),setInterval(l,1e3*o+100)}).exec()}},100)}},{"key":"render","value":function render(){var e=this.props,t=e.single,a=e.icon,o=e.marquee,i=this.props,c=i.showMore,s=i.close,f=this.state.dura,m=["at-noticebar"],d=this.props.moreText;t||(c=!1),d||(d="查看详情");var p={},N=["at-noticebar__content-inner"];return o?(s=!1,m.push("at-noticebar--marquee"),p["animation-duration"]=f+"s",r.default.getEnv()===r.default.ENV_TYPE.WEAPP&&m.push("at-noticebar--weapp"),N.push(this.state.animElemId)):(c&&m.push("at-noticebar--more"),t&&m.push("at-noticebar--single")),this.state.show&&n.default.createElement(l.View,{"className":m},s&&n.default.createElement(l.View,{"className":"at-noticebar__close","onClick":this.onClose.bind(this)},n.default.createElement(u.default,{"value":"close","size":"16","color":"#ccc"})),n.default.createElement(l.View,{"className":"at-noticebar__content"},a&&n.default.createElement(l.View,{"className":"at-noticebar__content-icon"},n.default.createElement(u.default,{"value":a,"size":"16"})),n.default.createElement(l.View,{"className":"at-noticebar__content-text"},n.default.createElement(l.Text,{"animation":this.state.animationData,"className":N,"style":p},this.props.children))),c&&n.default.createElement(l.View,{"className":"at-noticebar__more","onClick":this.onGotoMore.bind(this)},n.default.createElement(l.Text,{"className":"text"},d),n.default.createElement(l.View,{"className":"at-noticebar__more-icon"},n.default.createElement(u.default,{"value":"chevron-right","size":"16"}))))}}]),AtNoticebar}();t.default=s,s.defaultProps={"close":!1,"single":!1,"marquee":!1,"speed":100,"moreText":"查看详情","showMore":!1,"icon":"","onClose":function onClose(){},"onGotoMore":function onGotoMore(){}},s.propTypes={"close":i.default.bool,"single":i.default.bool,"marquee":i.default.bool,"speed":i.default.number,"moreText":i.default.string,"showMore":i.default.bool,"icon":i.default.string,"onClose":i.default.func,"onGotoMore":i.default.func}},"156":function(e,t,a){},"158":function(e,t,a){},"16":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),i=_interopRequireDefault(a(0)),n=a(49),l=_interopRequireDefault(a(155)),c=_interopRequireDefault(a(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(158);var u=function(e){function NoticebarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NoticebarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NoticebarPage.__proto__||Object.getPrototypeOf(NoticebarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NoticebarPage,i.default.Component),o(NoticebarPage,[{"key":"onGotoMore","value":function onGotoMore(){r.default.getEnv()===r.default.ENV_TYPE.WEAPP?r.default.showModal({"content":"点击了更多!"}):r.default.getEnv()===r.default.ENV_TYPE.WEB&&alert("您点击了更多!")}},{"key":"render","value":function render(){return i.default.createElement(n.View,{"className":"page"},i.default.createElement(c.default,{"title":"NoticeBar 通告栏"}),i.default.createElement(n.View,{"className":"doc-body"},i.default.createElement(n.View,{"className":"panel"},i.default.createElement(n.View,{"className":"panel__title"},"文字"),i.default.createElement(n.View,{"className":"panel__content"},i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,null,"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),i.default.createElement(n.View,{"className":"panel"},i.default.createElement(n.View,{"className":"panel__title"},"跑马灯"),i.default.createElement(n.View,{"className":"panel__content"},i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"marquee":!0},"[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"marquee":!0,"icon":"volume-plus"},"[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"marquee":!0},"[超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")))),i.default.createElement(n.View,{"className":"panel"},i.default.createElement(n.View,{"className":"panel__title"},"图标"),i.default.createElement(n.View,{"className":"panel__content"},i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"icon":"volume-plus"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),i.default.createElement(n.View,{"className":"panel"},i.default.createElement(n.View,{"className":"panel__title"},"查看更多"),i.default.createElement(n.View,{"className":"panel__content"},i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"showMore":!0,"single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"showMore":!0,"icon":"volume-plus","single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","icon":"volume-plus","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),i.default.createElement(n.View,{"className":"panel"},i.default.createElement(n.View,{"className":"panel__title"},"关闭按钮"),i.default.createElement(n.View,{"className":"panel__content"},i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),i.default.createElement(n.View,{"className":"bar-item"},i.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏"))))))}}]),NoticebarPage}();t.default=u}}]);