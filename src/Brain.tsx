export default function Randomnnumbers(n: number): number[] {
    let result: number[] = [];
 
    while (result.length < n) {
        let num: number = Math.round(Math.random() * n);
        while (num == 0 || result.includes(num)) {
            num = Math.round(Math.random() * n);
        }
        result.push(num);
    }
    return result;
}