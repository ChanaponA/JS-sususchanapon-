let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

uniqueElements = (arrayValue) => {
    let unique = [];

    arrayValue.forEach((arr) => {
        if (!unique.includes(arr)) {
            unique.push(arr);
        }
    });

    return unique;
};

console.log(uniqueElements(numbers));

