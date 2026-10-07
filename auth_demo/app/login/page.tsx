import {signIn} from "@/auth";

export default function LoginPage(){
    return(
        <main>
            <h1>Student Login</h1>
            <form
                action={async(formData)=>{"use server";
                    await signIn("credentials",{
                        username: formData.get("username"),
                    password: formData.get("password"),
                        redirectTo: "/dashboard",
                    });
                }}
            >
                <input
                    type="text"
                    name="username"
                    placeholder = "username"
                    required
                />
                <br/><br/>
            
                <input
                    type="password"
                    name="password"
                    placeholder = "password"
                    required
                />
                <br/><br/>

                <button type="submit">Login</button>
            </form>
        </main>
    )
}