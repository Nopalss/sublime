import { useEffect } from "react";
import Layout from "./Layout";
import Home from "./Pages/Home";
import ScrollReveal from "scrollreveal";
function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2050,
      delay: 200,
      reset: false,
    });
    sr.reveal(".bottom", { origin: "top" });
    sr.reveal(".top", { origin: "top" });
    sr.reveal(".left", { origin: "top" });
    sr.reveal(".right", { origin: "top" });
  });
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
}

export default App;
