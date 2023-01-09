import { useEffect, useState } from "react";

import { loginUser } from "../redux/Slice/loginSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import AuthConsumer from "../auth/auth";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const [handleLogin, setHandleLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authed, dispatch1] = AuthConsumer();

  useEffect(() => {
    if (authed) {
      navigate("/getAllCategory");
    }
  }, [authed]);

  const handleFormChange = (e) => {
    if (e.target.name === "username") {
      if (e.target.value.trim()) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
      } else {
        setError({ ...error, [e.target.name]: "Username can't be empty" });
      }
    }
    if (e.target.name === "password") {
      if (e.target.value) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
      } else {
        setError({ ...error, [e.target.name]: "Password can't be empty" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error1 = { ...error };
    if (formData.username === "") {
      error1 = { ...error, username: "Username can't be empty" };
      setError(error1);
    }
    if (formData.password === "") {
      error1 = { ...error1, password: "Password can't be empty" };
      setError(error1);
    }

    if (formData.username !== "" && formData.password !== "") {
      setHandleLogin(true);
      dispatch(loginUser(formData))
        .then((res) => {
          setHandleLogin(false);
          if (res.payload.token) {
            message.success("Login Successfull");
            dispatch1({ type: "login" });
            navigate("/getAllCategory");
          }
        })
        .catch((err) => {
          setHandleLogin(false);
          //console.log(err);
        });
    }
  };

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="bg-white border w-96 p-6 rounded shadow-sm">
            <h1 className="text-2xl mb-3">Login</h1>

            <label className="text-gray-700">Email / Username</label>
            <input
              className="w-full focus:outline-blue-500 bg-gray-100 py-2 text-gray-500 px-2.5 mb-4"
              type="text"
              name="username"
              onChange={(e) => handleFormChange(e)}
            />
            <div className="mb-2">
              {error.username ? (
                <span style={{ color: "red" }}>{error.username}</span>
              ) : null}
            </div>

            <label className="text-gray-700">Password</label>
            <input
              className="w-full focus:outline-blue-500 bg-gray-100 py-2 text-gray-500 px-2.5 mb-4"
              type="password"
              name="password"
              onChange={(e) => handleFormChange(e)}
            />
            <div className="mb-2">
              {error.password ? (
                <span style={{ color: "red" }}>{error.password}</span>
              ) : null}
            </div>

            {/* <input className="mb-4 h-4" type="checkbox" />
            <label className="text-gray-700 ml-1">Remember Me</label> */}

            <button
              className="text-gray-100 bg-blue-500 w-full py-2 rounded hover:bg-blue-600 transition-colors"
              type="submit"
              disabled={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
