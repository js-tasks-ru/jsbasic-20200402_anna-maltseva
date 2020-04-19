/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
<<<<<<< HEAD
    if (!name|| name.indexOf(' ') !== -1 || name.length < 4) {
      return false;
    }
  
    return true;
  }	
  
=======
  if (!name || name.indexOf(' ') !== -1 || name.length < 4) {
    return false;
  }

  return true;
}

>>>>>>> 0a18d90f558d86e236ae43ef765a2543a7613b8b
function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
