const cutString = (str, countSymbols) => {
  const cuttedStr = str.substr(0, countSymbols);
  if (str.length > cuttedStr.length) {
    return `${cuttedStr}...`;
  }
  return cuttedStr;
};

export default cutString;
