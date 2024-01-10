
/**
 * Function to generate a random array
 * 
 * @param lengthOfArray Length of the array.
 * @param max Max value of the array
 */
export function generateAnArray(lengthOfArray: number, max: number) : Array<number>{
   return Array.from({length: lengthOfArray}, () => Math.floor(Math.random() * max));
}