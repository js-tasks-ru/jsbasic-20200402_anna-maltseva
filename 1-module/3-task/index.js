/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) { 
  if (!str) return str;
 return (str[0].toUpperCase()+str.substring(1));
}

