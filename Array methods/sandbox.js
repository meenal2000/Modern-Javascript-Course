let scores = [10, 20 , 15 , 5 , 25 , 50 , 40 ];

const ScoreFilter = scores.filter( (score) => {
    return score > 20;
});

console.log(ScoreFilter);
console.log(scores);

// helps in filtering out particular elements having  
// certain property associated with them

// MAP method - Much like filter, it's non-destructive , does'nt alter the original array
mat = [
    {name : 'meenal', price : 30},
    {name : 'X', price : 70},
    {name : 'X', price : 80},
    {name : 'Z', price : 90}
];

NewMat = mat.map(m => {
    if(m.price > 30)
    {
        return {name : m.name , price : m.price/2};
    }
    else
    {
        return m;
    }
});
console.log(NewMat);
console.log(mat);

// reduce method
const MAP = mat.reduce( (acc,curr) => {
    if(curr.name === 'X')
    {
        acc += curr.price;
    }
    return acc;
},0);

console.log(MAP); // helpful when adding certain similar entries like names with 'X'

// Find - returns the first value in the array that passes a certain condition
const HighScore = scores.find( (score) =>{
    return score > 100;
});

console.log(HighScore);

// sort method converts the array into strings and then , sort it 
// So , it isn't the normal sort okay.///

scores = [10, 20 , 15 , 5 , 25 , 50 , 40 ];
scores.sort((a,b) => a-b);
scores.sort((a,b) => b-a);
console.log(scores);

// chaining array methods - quite easy . .filter() .map();