import { Hero } from "../components";
import { NextHead } from "../global";

const Home = () => {
    return (
        <div>
            <NextHead title="Cloud-O" />

            <Hero />
        </div>
    );
};
export default Home;