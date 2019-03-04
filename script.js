//var prompt = prompt('Are you saved?');

var lists = ['home', 'bible study', 'envangelism', 'about us', 'contact us'];
var ul = document.querySelector('ul');

lists.forEach(list => {
	var li = document.createElement('li');
	li.textContent = list;
	ul.appendChild(li);
});