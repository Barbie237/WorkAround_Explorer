export const formatNumber = number => {
    let numStr = String(Math.floor(number))
  // Starting 3 from the end, add a comma every 3 digits.
    for (let i = numStr.length - 3; i > 0; i -= 3) {
      numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
    }
    return numStr;
  }
  