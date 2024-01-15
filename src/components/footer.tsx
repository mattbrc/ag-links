import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <div className="p-2 m-4">
      <div className="grid grid-flow-col items-center gap-4">
        <Link href="https://twitter.com/acidgambit_">
          <BsTwitterX />
        </Link>
        <Link href="https://instagram.com/acidgambit">
          <FaInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}
