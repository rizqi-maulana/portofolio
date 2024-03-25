import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export const GET = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.from('media').select()
    if (error) return NextResponse.json({ status: 'error', message: error })
    return NextResponse.json(data)
}