import { NextResponse } from "next/server";

type Student = {
    id: Number;
    name: string;
    marks: number;
};

let students: Student[] = [
    {id:1, name: "Arun", marks: 85},
    {id:2, name: "Aru", marks: 55},
    {id:3, name: "run", marks: 95},
];

// GET/api/studnets

export async function GET(){
    return NextResponse.json(students);
}

// POST/api/students
export async function POST(request: Request){
    const body = await request.json();
    const newStudent : Student = {
        id: Date.now(),
        name: body.name,
        marks: Number(body.marks

        )
    }
}