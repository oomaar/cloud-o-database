import { Hero } from "../Components";
import { NextHead } from "../Global";

export const HomeContainer = () => {
    return (
        <div>
            <NextHead title="Omar's Cloud" />

            <Hero />
        </div>
    );
};