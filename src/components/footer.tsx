import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <div className="p-2 m-4">
      <Link href="https://twitter.com/acidgambit_">
        <BsTwitterX />
      </Link>
    </div>
  );
}
