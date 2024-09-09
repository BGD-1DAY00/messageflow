import {createClient} from "@/utils/supabase/client";

export async function loginUserClient(email: string, password: string) {
    const supabase = createClient()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            throw error;
        }

        return data
    } catch (error) {
        console.error('Error during login:', error)
        throw error
    }
}