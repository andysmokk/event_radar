import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex first-line:items-center justify-between">
        <Link href="/" className="flex">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
          />
          <p className="h5-bold ml-1">Event Radar</p>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-20 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
