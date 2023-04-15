import "./LandingPage.css";
import NavBar from "../../components/NavBar";

const ulStyle = {};

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div>
        <h1>TODO App</h1>
        <h3>Creative Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          aspernatur, dicta error eius odit expedita nobis ad autem.
          Consequuntur sunt quam saepe, vitae sit a fugiat quaerat fugit odit!
          Facere!
        </p>

        <button> try now </button>
        <button> contact us </button>
      </div>
      <div>hero image</div>
    </>
  );
}
