import {
    HeroBox,
    HeroFeature,
    HeroTitle,
    HeroSubTitle,
    ButtonsBox,
    Button,
} from "./styledHero";

export const Hero = () => {
    return (
        <HeroBox>
            <HeroFeature>
                <HeroTitle>Welcome To My Cloud</HeroTitle>
                <HeroSubTitle>This cloud is for entertainment and media, Signup to enjoy, Free !</HeroSubTitle>
                <ButtonsBox>
                    <Button>Login</Button>
                    <Button>Demo</Button>
                </ButtonsBox>
            </HeroFeature>
        </HeroBox>
    );
};