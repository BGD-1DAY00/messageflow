import { createClient } from '@/utils/supabase/client'
import {AuthResponse, Provider} from '@supabase/supabase-js'

export async function registerUserClient(email: string, password: string): Promise<AuthResponse['data']> {
    const supabase = createClient()
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error(error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}
