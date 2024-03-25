import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/client"
export const POST = async (request: NextRequest) => {
    const formdata = await request.formData();
    const supabase = createClient();
    const FileName = formdata.get('FileName') as string
    const { data } = await supabase
        .storage
        .from('assets')
        .getPublicUrl(`projects/${FileName}`)

    return NextResponse.json({ status: 'success', publicUrl: data.publicUrl })
}