import React, { Component } from "react";

const Card = props => {
  console.log(props.children.props.children)
  return <div>{props.children}</div>;
};
const CardBox = () => {
  return (
    <Card>
      <div>
        <h2>React.js 小书</h2>
        <div style={{color:'red',fontSize:'12px'}}>开源、免费、专业、简单</div>
        订阅：
        <input />
      </div>
    </Card>
  );
};
class AutoFocusInput extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return (
      <div>
        <input ref={input => (this.input = input)} />
        <CardBox />
      </div>
    );
  }
}
export default AutoFocusInput;
