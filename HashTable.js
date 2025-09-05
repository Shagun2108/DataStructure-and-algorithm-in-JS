class HashTable {
  // hash function
  // acts like na translator taking an input size(key) an dconverting it inyo
  // fixed-sized value (hashCode) that can be used as and index withing the hashtables
  // internal array the process of mapping arbitrary keys to fixed length incides is called hashing

  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(i) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
    return sum;
  }

   set(key, value) {
  const index = this._hashFunction(key);

  // only initialize the bucket at this index
  if (!this.keyMap[index]) {
    this.keyMap[index] = [];
  }

  this.keyMap[index].push([key, value]);
  return this;
}



  get(key) {
    const index = this._hashFunction(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
  const keys = [];
  for (let i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {   
             
      for (let j = 0; j < this.keyMap[i].length; j++) {
        keys.push(this.keyMap[i][j][0]); // push the key
      }
    }
  }
  return keys;
}
  getAllValues() {
  const values = [];
  for (let i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {           
      for (let j = 0; j < this.keyMap[i].length; j++) {
        values.push(this.keyMap[i][j][1]); // push the key
      }
    }
  }
  return values;
}

}


const phonebook = new HashTable();
phonebook.set('john','555');
phonebook.set('shgaun','555');
phonebook.set('anuj','555');
phonebook.set('hello','555');
console.log(phonebook);
console.log(phonebook.getAllKeys());
console.log(phonebook.getAllValues());

