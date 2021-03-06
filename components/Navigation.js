import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home Page</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

export default Navigation;
