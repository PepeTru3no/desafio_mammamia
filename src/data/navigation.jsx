import {
    GiKeyLock,
    GiCombinationLock,
    GiPizzaSlice,
} from "react-icons/gi";
import { GrLogin, GrLogout } from "react-icons/gr";
export const navigation = (token) => {
    const nav = [
        {
            name: "Pizzeria Mamma Mia!",
            href: "",
            icon: "",
        },
        {
            name: "Home",
            href: "/",
            icon: <GiPizzaSlice size={"2em"} color="yellow" />
        },
        {
            name: token ? "Logout" : "Register",
            href: token ? "/logout" : "/register",
            icon: token ? (
                <GrLogout size={"2em"} color="yellow" />
            ) : (
                <GiCombinationLock size={"2em"} color="yellow" />
            ),
        },
        {
            name: token ? "Profile" : "Login",
            href: token ? "/profile" : "/login",
            icon: token ? (
                <GiKeyLock size={"2em"} color="yellow" />
            ) : (
                <GrLogin size={"2em"} color="yellow" />
            ),
        },
    ];
    return nav;
}