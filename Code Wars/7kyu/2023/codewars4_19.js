// Remove All The Marked Elements of a List

// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

l = new Array();
integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];

integer_list2 = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list2 = [1, 3, 4, 2];

integer_list3 = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3];
values_list3 = [2, 4, 3];

integer_list4 = [4, 4, 2, 3];
values_list4 = [2, 2, 4, 3];

integer_list5 = [];
values_list5 = [2, 2, 4, 3];

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((x) => values_list.includes(x) == false);
};
console.log(l.remove_(integer_list, values_list)); // [2, 2, 4]

console.log(l.remove_(integer_list2, values_list2)); // [5, 6 ,7 ,8]

console.log(l.remove_(integer_list3, values_list3)); // [8, 7, 6, 5, 1]

console.log(l.remove_(integer_list4, values_list4)); // []

console.log(l.remove_(integer_list5, values_list5)); // []
