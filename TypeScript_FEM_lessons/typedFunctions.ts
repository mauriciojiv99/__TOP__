function add(a: number, b: number): number {
  return a + b;
}

add(140, 60); // 200
//add("oh", "no"); // Error!

const concat = (a: string, b: string): string => {
  return a + b;
};

concat("oh", "yeah"); // 'ohyeah'
//concat(40, 4); // Error!
