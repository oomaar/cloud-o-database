import Image from "next/image";
import Link from "next/link";
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
                {/* {
                    (!loading && !session) && (
                        <Link href="/api/auth/signin">
                            <HeroButton onClick={handleSignIn}>Log In</HeroButton>
                        </Link>
                    )
                }

                {
                    session && (
                        <Link href="/api/auth/signout">
                            <HeroButton onClick={handleSignOut}>Log out</HeroButton>
                        </Link>
                    )
                } */}
            </HeroNavbar>
            <HeroFeature>
                <HeroTitle>Welcome</HeroTitle>
                <HeroSubtitle>Home to All Entertainment</HeroSubtitle>
                <Link href="#">
                    <HeroButton>Signup with Github</HeroButton>
                </Link>
            </HeroFeature>
        </HeroContainer>
    );
};