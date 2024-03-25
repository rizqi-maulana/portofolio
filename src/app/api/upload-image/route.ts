import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const supabase = createClient()
    const formdata = await request.formData()
    const Image: File = formdata.get('Image') as unknown as File
    const Filename: string = formdata.get('FileName') as string
    if (!Image) {
        return NextResponse.json({ status: false });
    }
    await supabase
        .storage
        .from('assets')
        .upload(`projects/${Filename}`, Image, {
            cacheControl: '3600',
            upsert: false
        })
    return NextResponse.json({ status: true });
};
