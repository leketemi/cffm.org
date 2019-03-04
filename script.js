var prompt;
var lists = ['home', 'bible study', 'envangelism', 'about us', 'contact us'];

var ul = document.querySelector('ul');
var answer = document.querySelector('#answer');

var buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		if (button.id === 'save') {
		prompt = prompt('Are you saved?');
		answer.textContent = prompt;
		}else if (button.id === 'holy') {
			prompt = prompt('Are you holy?');
			answer.textContent = prompt;
		}else if (button.id === 'holy-spirit') {
			prompt = prompt('Are you filled with holy spirit?');
			answer.textContent = prompt;
		}
	});
});

lists.forEach(list => {
	var li = document.createElement('li');
	li.textContent = list;
	ul.appendChild(li);
});