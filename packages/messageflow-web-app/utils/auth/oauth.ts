import {OAuthResponse, Provider} from "@supabase/supabase-js";
import {createClient} from "@/utils/supabase/client";


export async function oAuthLoginSignup(providerVal: Provider): Promise<OAuthResponse | undefined> {
    const supabase = createClient()
    try {
        return await supabase.auth.signInWithOAuth({
            provider: providerVal,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        });
    } catch (error) {
        console.error('Error registering user:', error);
    }
}