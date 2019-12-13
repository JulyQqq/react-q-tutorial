import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    arrDatas: [
      { name: "a", job: "开发" },
      { name: "b", job: "开发" },
      { name: "c", job: "开发" }
    ]
  };
  render() {
    const { arrDatas } = this.state;
    return (
      <div>
        hello,react
        <Table arrData={arrDatas} />
      </div>
    );
  }
}
export default App;
