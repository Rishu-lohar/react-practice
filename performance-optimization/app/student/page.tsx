import Image from "next/image";

export default function Student (){

    return (
        <div>
            <Image
            src="/studen2.jpg"
            alt="Student"
            width={400}
            height={400}
            style={{
                padding: "20px",
                position: "absolute"
            }}
        />
        
        </div>
        
    )
}