import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import {
    HeroContainer,
    HeroNavbar,
    HeroNavbarLogo,
    HeroFeature,
    HeroTitle,
    HeroSubtitle,
    HeroButton,
} from "./styledHero";

export const Hero = () => {
    const { data: session } = useSession();

    const handleSignIn = e => {
        e.preventDefault();
        signIn();
    };

    return (
        <HeroContainer>
            <HeroNavbar>
                <Link href="/">
                    <HeroNavbarLogo>
                        <Image
                            src="/logo-white.png"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </HeroNavbarLogo>
                </Link>
                <Link href="/api/auth/signin">
                    <HeroButton onClick={handleSignIn}>Log In</HeroButton>
                </Link>
            </HeroNavbar>
            <HeroFeature>
                <HeroTitle>Welcome</HeroTitle>
                <HeroSubtitle>Home to All Entertainment</HeroSubtitle>
                {session && (
                    <Link href="/dashboard">
                        <HeroButton>Dashboard</HeroButton>
                    </Link>
                )}
            </HeroFeature>
        </HeroContainer>
    );
};