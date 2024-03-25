import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export const POST = async (request: NextRequest) => {
    const supabase = createClient();
    const formdata = await request.formData();
    const id = formdata.get('id')

    const { data, error } = await supabase.from('projects').select().eq('id', id)
    if (error) return NextResponse.json({ status: 'error', message: error })


    return NextResponse.json(data);
};
