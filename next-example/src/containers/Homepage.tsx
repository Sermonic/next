import Link from "next/link";

export function HomePage() {
  return (
    <div>
      <h1>Hello from the Home Page</h1>
      <Link href='/people'>
        <a>People</a>
      </Link>
      <hr/>
      <Link href='/vehicles'>
        <a>Vehicles</a>
      </Link>
    </div>
  );
}
