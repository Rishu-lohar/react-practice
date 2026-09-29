import { NextResponse } from "next/server";
import {students} from "@/app/lib/student";

export async function GET(
    request: Request,
    {params}:
    {params: Promise<{id: string}>}
){
    const {id} = await params;
    const student = students.find(
        (student) => student.id === Number(id)
    );
    if (!student){
        return NextResponse.json(
            {message: "Student not found"},
            {status: 404}
        );
    }
    return NextResponse.json(student);
}