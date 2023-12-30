import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border p-2 m-4 border-red-400">
      <Link href="https://twitter.com/acidgambit_">
        <BsTwitterX />
      </Link>
    </div>
  );
}
