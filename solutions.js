//02-pick
//-

//03-omit
//-

//04-highestAndLowest

const numbers = "1 2 3 -4 6";

function highestAndLowest(numbers) {
    numbersArr = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbersArr) + ' ' + Math.min.apply(0, numbersArr);
}

highestAndLowest(numbers);

//05-largestPairSum

const numbers = [1, 2, 3, -4, 6];

function largestPairSum(numbers){
  max = numbers[0];
  afterMax = null;
  for (var i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      afterMax = max;
      max = numbers[i];
    }
    else if(max != numbers[i] && afterMax < array[i]){
      afterMax = numbers[i];
    }
  }
  return Math.max.apply(0, numbersArr) + afterMax;
}

largestPairSum(numbers);

//06-repeatString
//-

//07-getLastWordLength

const sentence = ('man in BlacK')
function getLastWordLength (sentence) {;
lastWorld = BaseShirtURL.substring(0, BaseShirtURL.lastIndexOf(" "));
return BaseShirtURL.length;
}

getLastWordLength(sentence);

//08-chunk
//-

//09-sameParityFilter
//-

//10-trimSymbols
//-