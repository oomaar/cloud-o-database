import { Hero } from "../components";
import { NextHead } from "../global";

const Home = () => {
    return (
        <div>
            <NextHead title="Cloud-O" />

            <Hero />

            <h1>This website will hold all my Data</h1>
            <h1>authenticate your self with protected route to safel store your data</h1>
            <h1>route for movies, route for music, route for images, route for programs and a route for emergency Data</h1>
            <h1>design it well and proffesional</h1>
            <h1>tools: mongoDB, NextJS, styled-components, images from pexels and logos from my Photoshop</h1>
        </div>
    );
};
export default Home;