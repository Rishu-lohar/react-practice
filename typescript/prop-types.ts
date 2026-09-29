// Product Props

// ParentComponent
//       │
//       ▼
// productProps Object
//       │
//       ▼
// Product()
//       │
//       ▼
// name + price
//       │
//       ▼
// Laptop - ₹55000

// Interface banaya hai jo Product ke props ka structure batata hai
interface ProductProps {
    name: string;
    price: number;
}

// Child Component
// Ye component Parent se name aur price receive karega
function Product({ name, price }: ProductProps): string {

    // Product ka name aur price return kar raha hai
    return `${name} - ₹${price}`;
}

// Parent Component
function ParentComponent(): void {

    // Parent object bana raha hai
    const productProps: ProductProps = {
        name: "Laptop",
        price: 55000
    };

    // Parent Child ko props bhej raha hai
    console.log(Product(productProps));
}

// Parent Component call
ParentComponent();


// 2. Children Props
//  // Parent
//    │
//    ▼
// cardProps
//    │
//    ▼
// Card()
//    │
//    ▼
// title
// children
//    │
//    ▼
// About: TypeScript makes props safer.

// children sirf string ya string array ho sakta hai
type ChildContent = string | string[];

// Card component ke props
interface CardProps {

    // Heading
    title: string;

    // Body Content
    children: ChildContent;
}

// Child Component
function Card({ title, children }: CardProps): string {

    // Agar children array hai
    const content = Array.isArray(children)

        // Array ko string bana do
        ? children.join(" ")

        // Agar already string hai to waise hi use karo
        : children;

    // Final Output
    return `${title}: ${content}`;
}

// Parent Object
const cardProps: CardProps = {

    title: "About",

    children: "TypeScript makes props safer."
};

// Child Component Call
console.log(Card(cardProps));




// 3. student information Card

// Student props

interface StudentProps{
    name :string;
    age : number;
    course : string;
    subjects : string[];
}

// student component 
function Student({
    name,
    age,
    course,
    subjects
}: StudentProps): string{
    return`
        name: ${name}
        Age : ${age}
        course: ${course}
        Subjects: ${subjects.join(",")}`;
         
}


// Parent object

const studentProps: studentProps ={
    name:"Rishu",
    age: 23,
    course: "MCA",
    subjects: [
        "JAVA",
        "TypeScript",
        "Next.js"
    ]
};

//Component cancelIdleCallback
console.log(Student(studentProps));