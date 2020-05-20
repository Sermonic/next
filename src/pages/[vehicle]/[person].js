import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();

  return (
    <h2>
      {router.query.person} {router.query.vehicle}
    </h2>
  );
}
