import React from "react";
import { Model, TabNode } from "flexlayout-react";
import "flexlayout-react/style/light.css";
import Layout from "./view/Layout";

const json = {
  global: {},
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            template: "",
            name: "FX",
            component: "grid",
          },
        ],
      },
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "FI",
            component: "grid",
          },
        ],
      },
    ],
  },
};
const factory: any = (node: TabNode) => <h1>Hello!</h1>;

function App() {
  const model: any = Model.fromJson(json);
  return <Layout model={model} factory={factory} />;
}

export default App;
