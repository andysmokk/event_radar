import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden flex align-middle">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Link href="/" className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={38}
              height={38}
            />
            <p className="h5-bold ml-1">Event Radar</p>
          </Link>
          <Separator className="border border-gray-100" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
