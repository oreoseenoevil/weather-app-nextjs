/**
 * Format words into Capitalize except "of, the, and, by" words
 * @param "broken clouds"
 * @returns "Broken Clouds"
 */
export const formatCapitalizeWord = (value: string | any) => {
  const excludedWords = ['of', 'the', 'and', 'by'];
  if (!value) {
    return '';
  }

  let arr: Array<string> = [];
  arr = value.split(' ');

  return arr
    .map((word, i) => {
      return excludedWords.includes(word.toLocaleLowerCase()) && i !== 0
        ? [word.toLocaleLowerCase()]
        : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
