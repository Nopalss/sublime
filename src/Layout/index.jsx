// import Navbar from "./Navbar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header className="font-inter">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
