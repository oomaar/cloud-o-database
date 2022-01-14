import Image from "next/image";
import {
    HeroContainer,
    HeroNavbar,
    HeroNavbarLogo,
    HeroNavbarButton,
} from "./styledHero";

export const Hero = () => {
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
                <HeroNavbarButton>Log In</HeroNavbarButton>
            </HeroNavbar>
        </HeroContainer>
    );
};