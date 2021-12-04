/** @format */

import axios from "axios";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import Layouts from "../../components/Layouts";

function Dashboard() {
  const [name, setName] = useState();
  const [token, setToken] = useState();
  const [expire, setExpire] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:9000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        Router.push("/login");
      }
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:9000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:9000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };
  return (
    <Layouts>
      <h1>halaman dashboard: {name}</h1>
      <button onClick={getUsers} className="button is-info">
        Get User
      </button>
      <table className="table is-striped is-fullwdth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layouts>
  );
}

export default Dashboard;
