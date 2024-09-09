import {createClient} from "@/utils/supabase/client";
// import {createServer} from "@/utils/supabase/server";

export async function logoutUserClient() {
    const supabase = createClient()
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}

// export async function logoutUserServer() {
//     const supabase = createServer()
//     try {
//         const { error } = await supabase.auth.signOut();
//
//         if (error) {
//             throw error;
//         }
//     } catch (error) {
//         console.error('Error logging out:', error);
//         throw error;
//     }
// }