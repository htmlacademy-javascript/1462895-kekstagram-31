const checkStringMaxLength = (string, maxLength) => string.length <= maxLength;

checkStringMaxLength('проверяемая строка', 20);
checkStringMaxLength('проверяемая строка', 18);
checkStringMaxLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');

  return string === string.split('').reverse().join('');
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

const parseNumbers = (data) => {
  data = Number(data
    .toString()
    .split('')
    .map((item) => Number(item))
    .filter((item) => !isNaN(item))
    .join(''));

  return data === 0 ? NaN : data;
};

parseNumbers('2023 год');
parseNumbers('ECMAScript 2022');
parseNumbers('1 кефир, 0.5 батона');
parseNumbers('агент 007');
parseNumbers('а я томат');
parseNumbers(2023);
parseNumbers(-1);
parseNumbers(1.5);
