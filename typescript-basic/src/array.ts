{
  // Implicit Array
  let friends = ["Rohim", "Korim", "Sabbir"];
  let mixedArray = ["Hello", true, 12];
  console.log(friends, mixedArray);

  // Explicit Array
  let friends2: string[] = ["Rakib", "Sakib", "Akib"];
  let mixedArray2: (string | number | boolean)[] = ["World", false, 100];
  console.log(friends2, mixedArray2);
}
