import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Signup() {
  const [signupFields, setSignupFields] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const captureData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFields((signupFields) => ({
      ...signupFields,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <NavBar />
      <h1>signup</h1>
      <form>
        <div>
          <label>first name</label>
          <br />
          <input
            type="text"
            value={signupFields.firstName}
            name={"firstName"}
            onChange={captureData}
          ></input>
        </div>
        <div>
          <label>last name</label>
          <br />
          <input
            type="text"
            value={signupFields.lastName}
            name="lastName"
            onChange={captureData}
          />
        </div>
        <div>
          <label>username</label>
          <br />
          <input
            type="text"
            value={signupFields.username}
            name="username"
            onChange={captureData}
          ></input>
        </div>
        <div>
          <label>password</label>
          <br />
          <input
            type="text"
            value={signupFields.password}
            name="password"
            onChange={captureData}
          ></input>
        </div>
        <div>
          <label>email</label>
          <br />
          <input
            type="text"
            value={signupFields.email}
            name="email"
            onChange={captureData}
          ></input>
        </div>
        <button
          onClick={function (e) {
            e.preventDefault();
            console.log(signupFields);
            const url = "/api/signup";
            fetch(url, {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
              body: JSON.stringify(signupFields),
            }).then((response) => {
              console.log(response);
            });
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
