export function encodeU8Int(arr){
    return arr.toString();
}

export function decodeU8Int(str){
    console.log({str})
    return (Uint8Array.from(str.split(",")));
}