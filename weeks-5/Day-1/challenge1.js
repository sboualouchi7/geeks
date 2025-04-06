const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
      if (arr.every(word => typeof word === 'string')) {
        const upper = arr.map(word => word.toUpperCase());
        resolve(upper);
      } else {
        reject('Array contains non-string elements');
      }
    });
  };


  const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
      if (arr.length > 4) {
        const sorted = [...arr].sort();
        resolve(sorted);
      } else {
        reject('Array length is too short');
      }
    });
  };

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))