import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <td>name</td>
        <td>job</td>
      </tr>
    </thead>
  );
};
const TableBody = props => {
  const rows = props.arrData.map((ele, index) => {
    return (
      <tr key={index}>
        <td>{ele.name}</td>
        <td>{ele.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const {arrData} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody arrData={arrData} />
      </table>
    );
  }
}

export default Table;
