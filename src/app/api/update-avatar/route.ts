import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const supabase = createClient()
    const formdata = await request.formData()
    const File: File = formdata.get('File') as unknown as File
    const Filename: string = formdata.get('FileName') as string
    if (!File) {
        return NextResponse.json({ status: false });
    }
    await supabase
        .storage
        .from('assets')
        .upload(`profile/${Filename}`, File, {
            cacheControl: '3600',
            upsert: false
        })

    return NextResponse.json({ status: true });
};

