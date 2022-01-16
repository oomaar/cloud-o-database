import { NextHead } from "../global";
import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();

            if (!session) {
                signIn();
            } else {
                setLoading(false);
            };
        };

        securePage();
    }, []);

    if (loading) {
        return <h2>better loading screen</h2>;
    };

    return (
        <div>
            <NextHead title="Cloud- O | Dashboard" />

            <h1>Images</h1>
            <h1>Music</h1>
            <h1>Movies</h1>
            <h1>Games</h1>
            <h1>Programs</h1>
            <h1>VIP Data</h1>
        </div>
    );
};

export default Dashboard;
