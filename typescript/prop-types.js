"use strict";
// console.log("Typescript program execution");
function Button({ label, onClick }) {
    console.log(`Button: ${label}`);
    onClick();
}
const saveButton = {
    label: "Save",
    onClick: () => {
        console.log("Save Button clicked");
    }
};
function Layout({ children }) {
    if (Array.isArray(children)) {
        return children.join("");
    }
    ;
    return String(children);
}
const pageContent = {
    children: ["Welcome", "to", "NextJS"]
};
console.log(Layout(pageContent));
