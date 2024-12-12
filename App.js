const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "parent-heading" }, "Hello from parent"),
    React.createElement("h1", { id: "parent-heading2" }, "Hello from parent2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "parent-heading" }, "Hello from parent"),
    React.createElement("h1", { id: "parent-heading2" }, "Hello from parent2"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello word from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
