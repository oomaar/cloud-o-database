import { HeroButton, HeroNavbar, HeroNavbarLogo } from "../../components/Hero/styledHero";
import { Card, CardTitle, Container, SubContainer } from "./styledDashboardContainer";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/dashboardData.json";

export const DashboardContainer = () => {
    const handleSignOut = e => {
        e.preventDefault();
        signOut();
    };

    const dashboardData = data.map(card => (
        <Link href={card.link} key={card.id}>
            <Card img={card.img}>
                <CardTitle>{card.title}</CardTitle>
            </Card>
        </Link>
    ));

    return (
        <Container>
            <HeroNavbar>
                <HeroNavbarLogo>
                    <Image
                        src="/logo-white.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </HeroNavbarLogo>
                <Link href="/api/auth/signout">
                    <HeroButton onClick={handleSignOut}>Log Out</HeroButton>
                </Link>
            </HeroNavbar>

            <SubContainer>
                {dashboardData}
            </SubContainer>
        </Container>
    );
};
