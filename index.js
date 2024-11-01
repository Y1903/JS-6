// Task 1

class Book {
  constructor(id, author, title, year, pages, shelfNumber = null) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.shelfNumber = shelfNumber;
    this.userId = null;
  }

  isVacant() {
    return this.shelfNumber !== null && this.userId === null;
  }

  getRent(userId) {
    if (this.isVacant()) {
      this.shelfNumber = null;
      this.userId = userId;
    } else {
      console.log("Книга не доступна для оренди.");
    }
  }
}

class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

// Приклад використання:
const book1 = new Book(1, "Стівен Кінг", "Аутсайдер", 2018, 328, 5); // Книга на полиці 5
const user1 = new User(55, "Юлія", "Назарін", "вул. Сонячна, 165");

console.log(book1.isVacant()); // true, книга доступна для оренди
book1.getRent(user1.id); // Видаємо книгу користувачу user1
console.log(book1.isVacant()); // false, книга на руках у користувача
console.log(book1); // Перевірка стану об'єкта книги



// Task 2
class Animal {
  constructor(type) {
    this.type = type;
  }
  hunting() {
    return `${this.type} зараз дожену здобич`;
  }
  growl() {
    return `${this.type} грррр`;
  }
}

class Tiger extends Animal {
  constructor(name, color) {
    super("Тигр");
    this.name = name;
    this.color = color;
  }
  growl() {
    return `${this.name} тигр з’їсть тебе`;
  }
}
class Wolf extends Animal {
  constructor(name, color) {
    super("Вовк");
    this.name = name;
    this.color = color;
  }
  growl() {
    return `${this.name} вовк з’їсть тебе`;
  }
}

const tiger1 = new Tiger("Тигр 1", "помаранчевий");
const wolf1 = new Wolf("Вовк 1", "сірий");

// Перевірка роботи методів
console.log(tiger1.hunting()); // Виведе: "Тигр 1 тигр з’їсть тебе"
console.log(tiger1.growl()); // Виведе: "Тигр 1 тигр ричить грррр"

console.log(wolf1.hunting()); // Виведе: "Вовк 1 вовк зараз нападе"
console.log(wolf1.growl()); // Виведе: "Вовк 1 вовк грізно грррр"
