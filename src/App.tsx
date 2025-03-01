import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyles";
import Router from "./routers";

function App() {
  return (
    <>
      <div>
        <Global styles={globalStyles} />
        <Router />
      </div>
    </>
  );
}

export default App;
