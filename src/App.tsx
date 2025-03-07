import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyles";
import Router from "@routers/index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App 컴포넌트 마운트");
    return () => {
      console.log("App 컴포넌트 언마운트");
    };
  }, []);
  return (
    <>
      <Global styles={globalStyles} />
      <Router />
    </>
  );
}

export default App;
