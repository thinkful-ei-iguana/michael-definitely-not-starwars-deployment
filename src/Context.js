import React from "react";

const Context = React.createContext({
  results: [],
  apiFetch: function() {}
});

export default Context;
