import { useState } from "react";
import NavBar from "../../components/NavBar";

export default function Login() {
  const [loginFields, setLoginFields] = useState({
    username: "",
    password: "",
  });

  const captureData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFields((loginFields) => ({
      ...loginFields,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label>username</label>
            <br />
            <input
              type="text"
              value={loginFields.username}
              name="username"
              onChange={captureData}
            ></input>
          </div>
          <div>
            <label>password</label>
            <br />
            <input
              type="text"
              value={loginFields.password}
              name="password"
              onChange={captureData}
            ></input>
          </div>
          <button
            onClick={function (e) {
              e.preventDefault();
              console.log(loginFields);
              const url = "/api/login";
              fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                cache: "no-cache",
                body: JSON.stringify(loginFields),
              }).then((response) => {
                console.log(response);
              });
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
