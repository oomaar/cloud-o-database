import { motion } from "framer-motion";
import NextImage from "next/image";
import { Button, ButtonLink } from "../../Global/GlobalStyle";
import {
    HeroBox,
    HeroNav,
    NavBox,
    HeroLogo,
    HeroLogoTitle,
    HeroFeature,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
} from "./styledHero";

const heroNavAnimation = {
    hidden: { y: -250 },
    visable: {
        y: 0,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 120
        }
    }
};

const heroFeatureAnimation = {
    hidden: {
        scale: 0.1,
        // y: "-100vh"
    },
    visable: {
        scale: 1,
        // y: 0,
        transition: {
            delay: 0.4,
            type: "spring",
            stiffness: 120
        }
    }
};

export const Hero = () => {
    return (
        <HeroBox>
            <motion.div
                variants={heroNavAnimation}
                initial="hidden"
                animate="visable"
            >
                <HeroNav>
                    <NavBox>

                        <HeroLogo>
                            <NextImage
                                src="/cloud-white.png"
                                width={150}
                                height={150}
                                objectFit="contain"
                            />
                        </HeroLogo>
                        <HeroLogoTitle>Cloud-S</HeroLogoTitle>
                    </NavBox>
                    <div>
                        <ButtonLink>Sign up</ButtonLink>
                    </div>
                </HeroNav>
            </motion.div>

            <HeroFeature>
                <motion.div
                    variants={heroFeatureAnimation}
                    initial="hidden"
                    animate="visable"
                >
                    <HeroTitle>Welcome to Cloud-S</HeroTitle>
                    <HeroSubtitle>Home of All Entertaiment</HeroSubtitle>
                    <HeroButtons>
                        <Button>Log In</Button>
                        <Button>Sign Up</Button>
                    </HeroButtons>
                </motion.div>
            </HeroFeature>

        </HeroBox>
    );
};