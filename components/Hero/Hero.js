import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import {
    HeroContainer,
    HeroNavbar,
    HeroNavbarLogo,
    HeroNavbarButton,
} from "./styledHero";

export const Hero = () => {
    const [session, loading] = useSession();
    console.log("🚀 ~ file: Hero.js ~ line 13 ~ Hero ~ loading", loading)
    console.log("🚀 ~ file: Hero.js ~ line 13 ~ Hero ~ session", session)

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
                {
                    (!loading && !session) && (
                        <Link href="/api/auth/signin">
                            <HeroNavbarButton onClick={handleSignIn}>Log In</HeroNavbarButton>
                        </Link>
                    )
                }

                {
                    session && (
                        <Link href="/api/auth/signout">
                            <HeroNavbarButton onClick={handleSignOut}>Log out</HeroNavbarButton>
                        </Link>
                    )
                }
            </HeroNavbar>
        </HeroContainer>
    );
};