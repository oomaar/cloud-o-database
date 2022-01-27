import { NextHead } from "../global";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session, loading } = useSession();

    if (loading) return null;

    if (!loading && !session) return <p>Access Denied</p>;

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
