import { createClient } from "@/utils/supabase/client"
import { NextResponse } from "next/server"
import { revalidateTag } from "next/cache"

export const GET = async () => {
    const supabase = createClient()
    revalidateTag('/')
    const { data, error } = await supabase.from("users").select();
    if (error) return NextResponse.json({ status: 'error', message: error })
    return NextResponse.json(data)

}