import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function AgAvatar() {
  return (
    <Avatar>
      <AvatarImage src="public/images/ag.png" alt="@ag" />
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
  );
}
