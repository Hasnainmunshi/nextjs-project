import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-4 max-w-md text-center mx-auto mt-8 border border-green-500">
      <h1> 404 - Page Not Found</h1>
      <Link className="btn btn-outline mt-4" href={"/"}>
        Go to home
      </Link>
    </section>
  );
}
