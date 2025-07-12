import { auth } from "@/auth";
import { cache } from "react";

export const getAuthCAched = cache(async () => {
    console.log("=>getAuthCAched");
    const session = await auth();
    return session;
});