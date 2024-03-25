import { createClient } from "@/utils/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    const supabase = createClient()
    const formdata = await request.formData()
    let name = formdata.get('name');
    const { data } = await supabase
        .storage
        .from('assets')
        .getPublicUrl(`tech/${name}.svg`)
    return NextResponse.json(data.publicUrl)
}