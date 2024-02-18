"use client";
import React from "react";
import Image from "next/image";
import {
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                    validate: (value) => {
                      if (value.length < 3) {
                        return "Username must be at least 3 characters";
                      }
                    },
                  })}
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutline
                  sx={{
                    color: "#737373",
                    userSelect: "none",
                    cursor: "default",
                  }}
                />
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </>
          )}
          <>
            <div className="input">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined
                sx={{ color: "#737373", userSelect: "none", cursor: "default" }}
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </>
          <>
            <div className="input">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 5 ||
                      !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                    ) {
                      return "Password must be at least 5 characters and contain at least one special character";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined
                sx={{ color: "#737373", userSelect: "none", cursor: "default" }}
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </>
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
