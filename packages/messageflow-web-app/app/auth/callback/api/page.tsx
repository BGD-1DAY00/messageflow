import { redirect } from 'next/navigation'
import {createServer} from "@/utils/supabase/server";
import {createClient} from "@/utils/supabase/client";

export default async function AuthCallbackPage() {
    const supabase = createClient()
    const response = await supabase.auth.getSession()

    console.log("session", response)
    if (response.data.session) {
        redirect('/home')
    }else{
        redirect('/auth/login')
    }

    return <div>Completing sign in, please wait...</div>
}