export function add(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a - b;
}
export function mul(a, b) {  // only export / named export
    return a * b;
}
export default function div(a, b) {  // Default export
    return a / b;
}

// ECMASCRIPT module system
