import Link from "next/link";
import { AgAvatar } from "./ag-avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import { Footer } from "./footer";

export function Linktree() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full"
        src="/images/ag.png"
        alt="@ag"
        width="50"
        height="50"
      />
      <div className="font-mono flex flex-col items-center justify-center mt-4">
        <p className="bg-zinc-700 px-1 rounded-lg">@ACIDGAMBIT</p>
        <div className="flex flex-col items-center justify-center mt-4">
          <Button variant={"aglink"} asChild>
            <Link href="https://app.cal.com/acidgambit/30min">
              Coaching Intro Call (Free)
            </Link>
          </Button>
          <Button variant={"aglink"} asChild>
            <Link href="https://discord.gg/W4x3Eej95q">
              Official AG Discord
            </Link>
          </Button>
          <Button variant={"aglink"} asChild>
            <Link href="https://acidgambit.gumroad.com/l/training">
              Get the AG Phraks Variant Program (Free)
            </Link>
          </Button>
          <Button variant={"aglink"} asChild>
            <Link href="https://acidgambit.gumroad.com/">
              Shop Training Programs
            </Link>
          </Button>
          <Button variant={"aglink"} asChild>
            <Link href="https://acidgambit.substack.com/">AG Writing</Link>
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
