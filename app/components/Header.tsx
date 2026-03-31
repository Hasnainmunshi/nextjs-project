import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>

      {/* Menu */}
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
