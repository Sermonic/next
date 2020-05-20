import Link from "next/link";

const people = [
  { v: "airplane", name: "sasha" },
  { v: "car", name: "max" },
  { v: "bike", name: "vitalik" },
];

export default function Details() {
  return (
    <div>
      {people.map((p) => (
        <div>
          <Link as={`/${p.v}/${p.name}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {p.name} {p.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
