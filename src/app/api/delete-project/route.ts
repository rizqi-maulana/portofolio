import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const formdata = await request.formData()
    const supabase = createClient()
    const id = formdata.get('id')
    const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)
    if (error) {
        return NextResponse.json({ status: 'error', message: error })
    }
    return NextResponse.json({ status: 'success' })
}