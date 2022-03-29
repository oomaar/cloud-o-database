import { Hero } from "../components";
import { NextHead } from "../global";

// source link
// https://www.loginradius.com/blog/async/guest-post/nextjs-authentication-guide/
// import { useEffect } from "react"
// import { useRouter } from "next/router"
// import authService from "auth-service" //imaginary auth service

// export default function ProtectedPage() {
//  const router = useRouter()

//  useEffect(() => {
  //  const authUser = authService.getUser()

    // if there is no authenticated user, redirect to login page_

    //if (!authUser) {
      //router.push("/login")
    //}
  //}, [])

  //return (
    //<>
      //<h1>Welcome {user.name}. This is a protected page</h1>`
    //</>
  //)
//}

const Home = () => {
    return (
        <div>
            <NextHead title="Cloud-O" />

            <Hero />
        </div>
    );
};
export default Home;
