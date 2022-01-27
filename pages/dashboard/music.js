import { useSession } from "next-auth/react";
import { Hero } from "../../components";
import { NextHead } from "../../global";

const Music = () => {
    const { data: session, loading } = useSession();

    if (loading) return null;

    if (!loading && !session) return <Hero />;
    return (
        <div>
            <NextHead title="Cloud-O | Music" />

            <h1>Music</h1>
        </div>
    );
};

export default Music;
