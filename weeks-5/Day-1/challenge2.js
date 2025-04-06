function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const toJs = JSON.parse(morse);
        if (Object.keys(toJs).length === 0) {
          reject("objet Morse est vide");
        } else {
          resolve(toJs);
        }
      } catch (e) {
        reject("Erreur ");
      }
    });
  }
  
  // 2
  function toMorse(mrse) {
    return new Promise((resolve, reject) => {
      const input = prompt("Entrez un mot ou une phrase :").toLowerCase();
      
      const invalidChars = [...input].filter(char => !mrse[char]);
      
      if (invalidChars.length > 0) {
        reject(`Caractère(s) non valide(s) : ${invalidChars.join(', ')}`);
      } else {
        const translation = [...input].map(char => mrse[char]);
        resolve(translation);
      }
    });
  }
  
  // 3
  function joinWords(morseTranslation) {
    const resultDiv = document.createElement('div');
    resultDiv.textContent = morseTranslation.join('\n');
    document.body.appendChild(resultDiv);
  }
  
  toJs()
    .then(morseObj => toMorse(morseObj))
    .then(translation => joinWords(translation))
    .catch(error => alert(`Erreur : ${error}`));