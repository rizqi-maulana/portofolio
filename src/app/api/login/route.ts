import { createClient } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const formdata = await request.formData()
    const supabase = createClient()
    const email = formdata.get('email')
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('email', email)
    if (error) return NextResponse.json(error)
    return NextResponse.json(data)
}