export const generatePair = (seed) => {
    let min = 10**(seed-1);
    let max = (10**seed)-1;
    let random1 = Math.round(Math.random() * (max - min) + min);
    let random2 = Math.round(Math.random() * (max - min) + min);
    
    return [random1, random2];
}