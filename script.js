const problem={
    title:"with the largest sum,and return its sum.\n",
    examples:[{
        input:"[-2,1,-3,4,-1,2,1,-5,4]",
        output:"6",
        explanation:"the subarry[4,-12,1] has the largest sum"
    },{
        input:"nums=[1]",
        output:"1",
        expalnation:"the subarray[1] has the largest sum 1"

    }]
}
const defaultcode={
    js: '/* * @parm{number[]} nums*@return{number}',
    java: '/* * @max number{number[]} nums*@return{number}'
}
const problems = [{
    title: "201.bitwise and number of range",
    difficulty: "medium",
    acceptance: "42%"
}, {
    title: "202 happy number",
    difficulty: "easy",
    acceptance: "54%"
}, {
    title: "203 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
},
{
    title: "204 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
}];
const problems2 = [{
    title: "title1",
    difficulty: "medium",
    acceptance: "42%"
}, {
    title: "title 2",
    difficulty: "easy",
    acceptance: "54%"
}, {
    title: "203 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
},
{
    title: "204 remove linked list from elements",
    difficulty: "hard",
    acceptance: "42%"
}];

function renderProblems(problemArray) {
    const parentEl = document.getElementById("problem-statements");
    parentEl.innerHTML = ''; // clear previous content
    const tableTag = document.createElement("table");
    for (let i = 0; i < problemArray.length; i++) {
        const trTag = document.createElement("tr");
        const tdEl1 = document.createElement("td");
        tdEl1.innerHTML = problemArray[i].title;
        const tdEl2 = document.createElement("td");
        tdEl2.innerHTML = problemArray[i].difficulty;
        const tdEl3 = document.createElement("td");
        tdEl3.innerHTML = problemArray[i].acceptance;
        trTag.appendChild(tdEl1);
        trTag.appendChild(tdEl2);
        trTag.appendChild(tdEl3);
        tableTag.appendChild(trTag);
    }
    parentEl.appendChild(tableTag);
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener('click', () => {
    renderProblems(problems);
});

button2.addEventListener('click', () => {
    renderProblems(problems2);
});

// initial render
renderProblems(problems);