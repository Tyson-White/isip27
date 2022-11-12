let word = 'цапля';
let charsList = ['_', '_', '_', '_', '_',]
let live = 5
while (live != 0){
	alert(charsList.join())
	var user = prompt()
	alert(user)
	if (user.length != 1){
		continue
	} else {
		if (word.indexOf(user) != -1) {
			for (i = 0; i < word.length; i++) {
				if (user == word[i]) {
					charsList[i] = word[i];
				} 
			}
		}
		else {
			live -= 1
			alert(`Неправильно \n Осталось жизней: ${live}`)
		}
	}
	if (charsList.join('') == word) {
		alert('Вы угадали слово')
		break
	}
};

alert('Вы проиграли :(')