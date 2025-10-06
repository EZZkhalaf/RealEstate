"use client";

import InputGray from "@/Components/Atoms/InputGray";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";

interface AuthDialogProps {
  onClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ onClose }) => {
  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
        <div className="bg-white rounded-lg shadow-xl p-8 w-[400px] max-w-[90%] gap-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Welcome {session.user?.name}
          </h2>
          <p className="text-gray-600">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
      <div className="bg-white rounded-lg shadow-xl p-8 w-[400px] max-w-[90%] gap-4">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {mode === "login" ? "Welcome Back" : "Create an Account"}
        </h2>

        {/* Register extra field */}
        {mode === "register" && (
          <InputGray
            type={"text"}
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <InputGray
          type={"email"}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input */}
        <InputGray
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Action buttons */}
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          {mode === "login" ? (
            <div>
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login with Google
              </button>
              <button
                onClick={() => alert(`Login with ${email}:${password}`)}
                className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
          ) : (
            <button
              onClick={() => alert(`Register ${name}, ${email}, ${password}`)}
              className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              Register
            </button>
          )}
        </div>

        {/* Switch mode link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-blue-600 hover:underline"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthDialog;
