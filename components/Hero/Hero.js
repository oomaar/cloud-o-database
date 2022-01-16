import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/client";
import {
    HeroContainer,
    HeroNavbar,
    HeroNavbarLogo,
    HeroNavbarButton,
} from "./styledHero";

export const Hero = () => {
    const handleSignIn = e => {
        e.preventDefault();
        signIn();
    };

    const handleSignOut = e => {
        e.preventDefault();
        signOut();
    };

    return (
        <HeroContainer>
            <HeroNavbar>
                <HeroNavbarLogo>
                    <Image
                        src="/logo-white.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </HeroNavbarLogo>
                <Link href="/api/auth/signin">
                    <HeroNavbarButton onClick={handleSignIn}>Log In</HeroNavbarButton>
                </Link>
                <Link href="/api/auth/signout">
                    <HeroNavbarButton onClick={handleSignOut}>Log out</HeroNavbarButton>
                </Link>
            </HeroNavbar>
        </HeroContainer>
    );
};