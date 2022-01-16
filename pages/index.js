import { Hero } from "../components";
import { NextHead } from "../global";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/client";
import { useEffect } from "react";

const Home = () => {
    const [session] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/dashboard")
        };
    }, []);

    return (
        <div>
            <NextHead title="Cloud-O" />

            <Hero />
        </div>
    );
};
export default Home;