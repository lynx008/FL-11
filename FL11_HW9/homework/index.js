let inputData = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

function getNumbers(str) {
	let regExp = /\d+/;
	return str.match(regExp);
}

function findTypes() {
    let result = {};
    for (let i = 0; i < arguments.length; i++) {
        if (result[typeof arguments[i]]) {
            result[typeof arguments[i]] += 1;
        } else {
            result[typeof arguments[i]] = 1;
        }
    }
    return result;
}

function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

function mapArray(arr, func) {
    let result = [];
    executeforEach(arr, function(count) {
        result.push(func(count));
    });
    return result;
}

function filterArray(arr, func) {
	let result = [];
	executeforEach(arr, function(count) {
		if (func(count)) {
			result.push(count);
		}
	});
	return result;
}

function showFormattedDate(date) {
	let options = { 
		year: 'numeric',
		month: 'short',
		day: 'numeric' 
	};
	let result = date.toLocaleDateString('en-US', options);
	return 'Date: '+result+'';
}

function canConvertToDate(date) {
	return !!Date.parse(date).toString();
}

function daysBetween(a, b) {
    const oneDay = 86400000;
    return Math.round((Date.parse(b) - Date.parse(a)) / oneDay);
}

function getAmountOfAdultPeople(arr) {
    let sum = 0;
    let age = 6575;
    filterArray(arr, function(el) {
        if (daysBetween(new Date(el[' birthday ']), new Date()) > age) {
            sum += 1;
        }
    });
    return sum;
}

function keys(arr) {
	let result = [];
	for (let key in arr) {
		if (arr.hasOwnProperty(key)) {
			result.push(key);
		}
	}
	return result;
}

function values(arr) {
	let result = [];
	for (let key in arr) {
		if (arr.hasOwnProperty(key)) {
			result.push(arr[key]);
		}
	}
	return result;
}