import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MyLoginPage = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ role }).catch(() => notify("Invalid email or password"));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setRole(e.target.value)}
          style={{ width: 200 }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ width: 200, marginTop: 20 }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default MyLoginPage;
