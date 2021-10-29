import { Hero } from "../Components";
import { NextHead } from "../Global";

export const HomeContainer = () => {
    return (
        <div>
            <NextHead title="Cloud-S | Landing Page" />

            <Hero />
        </div>
    );
};