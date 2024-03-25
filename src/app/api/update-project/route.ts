import { createClient } from "@/utils/supabase/client";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const supabase = createClient();
    const formdata = await request.formData();
    const id = formdata.get('id')

    const objdata = {
        title: formdata.get("title"),
        description: formdata.get("description"),
        thumb: formdata.get("thumb"),
        website: formdata.get("website") ? formdata.get("website") : null,
        github: formdata.get("github") ? formdata.get("github") : null,
        techstack: [
            {
                "TechStack":
                    JSON.parse(formdata.get("techstack") as string)

            }
        ],
    };
    const { error } = await supabase.from('projects').update(objdata).eq('id', id)
    if (error) return NextResponse.json({ status: 'error', message: error })

    return NextResponse.json({ status: 'success' });
};