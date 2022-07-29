const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let h = (ingredients.length -1);
while (h >= 0) {
  console.log(ingredients[h]);
  h--;
}