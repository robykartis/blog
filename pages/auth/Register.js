/** @format */

import React from "react";

function Register() {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwitdh">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box">
                <div className="filed mt-5">
                  <label className="label">Masukan User Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan User Name"
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
                    />
                  </div>
                </div>
                <div className="filed mt-5">
                  <div className="controls">
                    <button className="button is-success is-fullwidth">
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
}

export default Register;
