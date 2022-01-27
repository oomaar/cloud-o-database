import { NextHead } from "../../global";
import { useSession } from "next-auth/react";
import { DashboardContainer } from "../../containers";

const Dashboard = () => {
    const { data: session, loading } = useSession();

    if (loading) return null;

    if (!loading && !session) return <p>Access Denied</p>;

    return (
        <div>
            <NextHead title="Cloud- O | Dashboard" />

            <DashboardContainer />
        </div>
    );
};

export default Dashboard;
