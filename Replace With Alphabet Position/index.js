function alphabetPosition(text) {
  const charCodeA = 'A'.charCodeAt(0);
  const charCodeZ = 'Z'.charCodeAt(0);
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    const charCode = char.charCodeAt(0);
    
    if (charCode >= charCodeA && charCode <= charCodeZ) {
      result.push(charCode - charCodeA + 1);
    }
  }

  return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

