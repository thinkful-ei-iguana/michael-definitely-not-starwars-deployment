import React, { Component } from "react";
import Context from "../Context";
import Result from "./Result";
import cuid from "cuid";

class ResultsDisplay extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        {this.context.results.map(result => (
          <Result key={cuid()} name={result.name} />
        ))}
      </div>
    );
  }
}

export default ResultsDisplay;
