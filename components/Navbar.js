import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Header</h1>
      <Link href="/">Home</Link>
      <Link href="/ninjas">Ninjas</Link>
      <Link href="/ninjas/test">Test</Link>
    </nav>
  );
};

export default Navbar;
