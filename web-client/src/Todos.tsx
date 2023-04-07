import List from "./components/List";

export default function Todos() {
  return (
    <div>
      {" "}
      <h1>Your lists</h1>
      <List name={"somelist"} items={["work out", "fly a car"]}></List>
    </div>
  );
}
