
const PostsData = [
{
  "category": "News",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  "image": "https://source.unsplash.com/user/erondu/600x400" },

{
  "category": "Travel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living a nomadic lifestyle",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400" },

{
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme for React & the WP-API",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400" },

{
  "category": "News",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  "image": "https://source.unsplash.com/user/erondu/600x400" },

{
  "category": "Travel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living a nomadic lifestyle",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400" },

{
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme for React & the WP-API",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400" }];




// Start App

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {} };

  }
  componentWillMount() {
    this.setState({
      posts: PostsData });

  }


  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("header", { className: "app-header" }), /*#__PURE__*/
    React.createElement(Title, null), /*#__PURE__*/
    React.createElement("div", { className: "app-card-list", id: "app-card-list" },

    Object.
    keys(this.state.posts).
    map(key => /*#__PURE__*/React.createElement(Card, { key: key, index: key, details: this.state.posts[key] }))));



  }}



class Title extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("section", { className: "app-title" }, /*#__PURE__*/
    React.createElement("div", { className: "app-title-content" }, /*#__PURE__*/
    React.createElement("h1", null, "Latest News"), /*#__PURE__*/
    React.createElement("p", null, "Only for Selected user's"), /*#__PURE__*/
    React.createElement("h4", { className: "Specal Deals", href: "", target: "_blank" }, "Specal Deals ", /*#__PURE__*/React.createElement("i", { className: "fa fa-heart" }))));


  }}



class Button extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("button", { className: "button button-primary" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-chevron-right" }), " Find out more"));


  }}



class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')' };

    return /*#__PURE__*/(
      React.createElement("header", { style: style, className: "card-header" }, /*#__PURE__*/
      React.createElement("h4", { className: "card-header--title" }, category)));


  }}



class CardBody extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "card-body" }, /*#__PURE__*/
      React.createElement("p", { className: "date" }, "March 20 2015"), /*#__PURE__*/

      React.createElement("h2", null, this.props.title), /*#__PURE__*/

      React.createElement("p", { className: "body-content" }, this.props.text), /*#__PURE__*/

      React.createElement(Button, null)));


  }}



class Card extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("article", { className: "card" }, /*#__PURE__*/
      React.createElement(CardHeader, { category: this.props.details.category, image: this.props.details.image }), /*#__PURE__*/
      React.createElement(CardBody, { title: this.props.details.title, text: this.props.details.text })));


  }}



ReactDOM.render( /*#__PURE__*/
React.createElement(Main, null),
document.getElementById('app'));