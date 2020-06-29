//Task 1
//Access HTML element with id tag-line.
let tagLine = document.getElementById('tag-line');

//Access all headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll('.bg-main-content h2')

//Create the variable collect and assign it with content of tag-line.
let collect = `
${tagLine.innerText}
--------------------`;

//Loop through the array of headings and append the content of each heading to variable collect
for (let i = 0; i < headings.length; i++){
     collect += `\n ${headings[i].innerHTML}` ;
}

//After the loop, use alert to print collect
alert(collect);

//Task 2
//Collect all divs with the class name "box" in node list.
let container = document.querySelectorAll('.box');

//Access 13th div with class name box that belongs to div with the class name bg-main-content.
let main = document.querySelector('.bg-main-content');

let last = main.children[12];
//Create variable collect and assign it with the heading and body-text that belong to the 13th div in order to resemble the screenshot below.
let h = `
${last.children[0].innerText}
--------------- \n`;

let firstP = `${last.children[1].innerText} \n \n`;

let secondP = last.children[2].innerText;


let collect2 = h + firstP + secondP;

//Print collect
console.log(collect2);