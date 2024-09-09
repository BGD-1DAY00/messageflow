// app/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {createServer} from "@/utils/supabase/server";

export async function GET(request: Request) {
    console.log('Auth Callback Route: Entered')
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    console.log(`Auth Callback Route: Received code: ${code ? 'yes' : 'no'}`)

    if (code) {
        const supabase = createServer()
        try {

            const { data: { session }, error: sessionError } = await supabase.auth.getSession()
            console.log('Auth Callback Route: Session check result:', { session: session ? 'exists' : 'null', error: sessionError })


            if (session) {
                console.log('Auth Callback Route: Redirecting to dashboard')
                console.log(session)
                return NextResponse.redirect(new URL('/home', requestUrl.origin))
            } else {
                console.log('Auth Callback Route: No session, redirecting to login')
                return NextResponse.redirect(new URL('/login', requestUrl.origin))
            }
        } catch (error) {
            console.error('Error in auth callback:', error)
            return NextResponse.redirect(new URL('/auth/error', requestUrl.origin))
        }
    }

    console.log('Auth Callback Route: No code, redirecting to login')
    return NextResponse.redirect(new URL('/login', requestUrl.origin))
}