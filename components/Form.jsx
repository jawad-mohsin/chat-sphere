import React from "react";
import Image from "next/image";
import {
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const Form = ({ type }) => {
  return (
    <div className="auth">
      <div className="content">
        <Image
          src="/assets/logo.png"
          alt="logo"
          className="logo"
          width={100}
          height={100}
        />
        <form className="form">
          {type === "register" && (
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                className="input-field"
              />
              <PersonOutline
                sx={{ color: "#737373", userSelect: "none", cursor: "default" }}
              />
            </div>
          )}
          <div className="input">
            <input type="email" placeholder="Email" className="input-field" />
            <EmailOutlined
              sx={{ color: "#737373", userSelect: "none", cursor: "default" }}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <LockOutlined
              sx={{ color: "#737373", userSelect: "none", cursor: "default" }}
            />
          </div>
          <button className="button" type="submit">
            {type === "register" ? "Join Free" : "Let's Chat"}
          </button>
          {type === "register" ? (
            <Link href="/" className="link">
              <p className="text-center">
                Already have an account? Sign in Here!
              </p>
            </Link>
          ) : (
            <Link href="/register" className="link">
              <p className="text-center">
                Don't have an account? Register Here!
              </p>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
