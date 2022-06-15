const cats = ["Milo", "Otis", "Garfield"]; 

//destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) { 
   cats.push(name);
} 

//destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) { 
  cats.unshift(name);
} 

//destructively removes the last cat from the cats array 
function destructivelyRemoveLastCat() { 
  cats.pop();
} 

//destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() { 
  cats.shift();
} 

//non destructively appends a cat to the cats array and returns a new array 
function appendCat(name) { 
  const newCats = [...cats, name]; 
  return newCats;
} 

//nondestructively prepends a cat to the cats array and returns a new array
function prependCat(name) { 
  const newCats = [name, ...cats]; 
  return newCats;
} 

//nondestructively removes the last cat in the cats array and returns a new array
function removeLastCat() { 
  return cats.slice(0, -1);
} 

//nondestructively removes the first cat from the cats array and returns a new array 
function removeFirstCat() { 
  return cats.slice(1);
}