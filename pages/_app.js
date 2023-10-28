import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const cookies = new Cookies(null, { path: "/" });
  const userToken = cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!userToken && router.pathname !== "/login") {
      router.push("/login");
    }
    if (userToken && router.pathname === "/login") {
      router.push("/dashboard");
    }
  }, [userToken, router.pathname]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
