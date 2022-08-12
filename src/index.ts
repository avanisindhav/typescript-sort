import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 3, -5, 0, 1, 4]);
numbers.sort();
console.log("NumbersCollection Sorted: ", numbers.data);

const strings = new CharactersCollection("avani");
strings.sort();
console.log("CharactersCollection Sorted: ", strings.data);

const newLink = new LinkedList();
newLink.add(12);
newLink.add(-1);
newLink.add(500);
newLink.add(-10);
newLink.add(-3);
newLink.add(4);

newLink.sort();
newLink.print();
