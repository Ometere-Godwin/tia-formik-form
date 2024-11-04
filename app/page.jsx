"use client";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./components/AuthContext";
import Register from "./components/Register";

export default function Home({ Components, pageProps }) {
  return (
    <AuthProvider>
      <div>
        <LoginForm />
        <Register />
      </div>
    </AuthProvider>
  );
}
