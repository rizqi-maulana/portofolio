import { createClient } from "@/utils/supabase/client"
import { NextResponse } from "next/server"

const supabase = createClient()
export const GET = async () => {

    const { data, error } = await supabase
        .from('myskills')
        .select()
    if (error) return NextResponse.json({ status: 'error', message: error })
    return NextResponse.json(data[0].skills[0].MySkills)

}