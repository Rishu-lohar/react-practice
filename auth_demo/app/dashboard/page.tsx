import {auth, signOut} from "@/auth";
import {redirect} from "next/navigation";
import {connection} from "next/server";

export const instant = false;

export default async function dashboard(){
    await connection();
    const session = await auth();

    

    if(!session){
        redirect("/login");

    }

    return(
        <main>
            <h1>Dashboard</h1>
            <p>Welcome, {session.user?.name}</p>
            <p>Email: {session.user?.email}</p>

            <form
                action={async()=>{
                    "use server";
                    await signOut({
                        redirectTo:"/login",
                    });
                }}
            >
                <button type="submit">Logout</button>
            </form>
        
        </main>
    )
}