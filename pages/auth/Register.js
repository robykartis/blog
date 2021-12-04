/** @format */

import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      Router.push("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwitdh">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Register} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="filed mt-5">
                  <label className="label">Masukan User Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan User Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="filed mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="filed mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="filed mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan Ulang Password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="filed mt-5">
                  <div className="controls">
                    <button
                      type="submit"
                      className="button is-success is-fullwidth">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
