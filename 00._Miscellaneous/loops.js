const rocks = [
  { name: "Granite", age: 100000 },
  { name: "Dwayne Johnson", age: 50 },
  { name: "The rock", age: 45 },
];

// assignment increase all rock ages by 1.

const rockPlusOneYear = rocks.map((rock) => ({ ...rock, age: rock.age + 1 })); // we use split so that we don't change the original array.
console.log(rockPlusOneYear);

// assignment rocks that have even ages

const rockEvenAges = rocks.filter((rock) => rock.age % 2 === 0);

console.log(rockEvenAges);
