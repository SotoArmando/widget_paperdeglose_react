export default function Desglosenumber(n: number): number[] {
    const monedas: number[] = [2000,1000,500,200,100,50,25,10,5,1];
    let result: number[] = [];
    let residuo: number = n;
    for(let i = 0; i < monedas.length; i++) {
        result.push(Math.floor(residuo / monedas[i]));
        residuo = (residuo % monedas[i]);
    }
    

    return result;
}