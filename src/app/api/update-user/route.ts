import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server"
export const PUT = async (request: NextRequest) => {
    const supabase = createClient();
    const objUpdate = await request.json();
    const { data, error } = await supabase
        .from('users')
        .update(objUpdate)
        .eq('id', 1)
    if (error) return NextResponse.json({ status: 'error', message: error })

    return NextResponse.json({ status: 'success' })
}