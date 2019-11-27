import React from "react";

const Context = React.createContext({
  results: [],
  apiFetch: function() {},
  clearResults: function() {}
});

export default Context;
