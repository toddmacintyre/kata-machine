function linear_search(haystack: number[], needle: number): boolean {

  let found: boolean = false;
  haystack.forEach((num) => {
    if (num === needle) {
      found = true;
    }
  });
  return found;
}

function bySome(haystack: number[], needle: number): boolean {
  return haystack.some((num) => {
    num === needle;
  });
}

function byForEach(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (i === needle) {
      return true;
    }
  }
  return false;
}

export default linear_search;
