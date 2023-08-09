function task7_1() {
  /*
  Задание 1: ""Управление библиотекой книг""
  
  Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
  
  Свойство title (название) - строка, название книги.
  Свойство author (автор) - строка, имя автора книги.
  Свойство pages (количество страниц) - число, количество страниц в книге.
  Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
  */

  class Book {
    #title;
    #autor;
    #pages;

    constructor(title, autor, pages) {
      this.#title = title;
      this.#autor = autor;
      this.#pages = pages;
    }

    displayInfo() {
      console.log(`Book info
    Title: ${this.#title}
    Autor: ${this.#autor}
    Pages: ${this.#pages}`);
    }
  }

  const itBook = new Book('IT book', 'Famous autor', 319);
  itBook.displayInfo();
}

function task7_2() {
  /*
  Задание 2: ""Управление списком студентов""
  Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
  
  Свойство name (имя) - строка, имя студента.
  Свойство age (возраст) - число, возраст студента.
  Свойство grade (класс) - строка, класс, в котором учится студент.
  Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
  javascript
  
  // Пример использования класса
  const student1 = new Student(""John Smith"", 16, ""10th grade"");
  student1.displayInfo();
  // Вывод:
  // Name: John Smith
  // Age: 16
  // Grade: 10th grade
  
  const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
  student2.displayInfo();
  // Вывод:
  // Name: Jane Doe
  // Age: 17
  // Grade: 11th grade"
  */

  class Student {
    #name;
    #age;
    #grade;

    constructor(name, age, grade) {
      this.#name = name;
      this.#age = age;
      this.#grade = grade;
    }

    displayInfo() {
      console.log(`Student
      Name: ${this.#name}
      Age: ${this.#age}
      Grade: ${this.#grade}`);
    }
  }

  const student1 = new Student("John Smith", 16, "10th grade");
  student1.displayInfo();

  const student2 = new Student("Jane Doe", 17, "11th grade");
  student2.displayInfo();
}

function task7_3() {
  /*
  ****** Задача необязательная для выполнения:
  Это расширенная версия задачи с банком, которую мы решлали на семинаре:

  Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

  Пример работы:

  const bank = new Bank("Мой Банк");

  const client1 = new Client("Иван", 25);
  const client2 = new Client("Мария", 30);

  bank.addClient(client1);
  bank.addClient(client2);

  bank.openAccount(client1, 1000);
  bank.openAccount(client2, 500);

  bank.deposit(123456789, 200);
  bank.withdraw(987654321, 100);
  bank.checkBalance(123456789);
  bank.checkBalance(987654321);
  */

  class Bank {
    #name;
    #clients = [];
    #accounts = [];

    constructor(name) {
      this.#name = name;
    }

    displayInfo() {
      console.log(`Bank: ${this.#name}`);
      this.#clients.forEach(client => client.displayInfo());
    }

    addClient(client) {
      if (!(client instanceof Client))
        throw new Error('Parameter is not a Client');
      if (this.#clients.includes(client))
        throw new Error('Client is already exists');

      this.#clients.push(client);
    }

    openAccount(client, money) {
      const foundClient = this.#clients.find(item => item === client);

      if (foundClient === -1)
        throw new Error(`It's not a Bank client`);

      this.#accounts.push(new Account(foundClient, money));
    }

    deposit(accountId, money) {
      if (accountId > this.#accounts.length)
        throw new Error('There is no account');

      this.#accounts[accountId].deposit(money);
    }

    withDraw(accountId, money) {
      if (accountId > this.#accounts.length)
        throw new Error('There is no account');

      this.#accounts[accountId].withDraw(money);
    }

    checkBalance(accountId) {
      if (accountId > this.#accounts.length)
        throw new Error('There is no account');

      console.log(this.#accounts[accountId].getBalance());
    }
  }

  class Client {
    #name;
    #age;

    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }

    displayInfo() {
      console.log(`Client:
      Name: ${this.#name}
      Age: ${this.#age}`);
    }
  }

  class Account {
    #accountOwner;
    #balance;
    #isOpened;

    constructor(owner, money) {
      this.#accountOwner = owner;
      this.#balance = money;
      this.#isOpened = true;
    }

    getBalance() {
      this.checkIsOpen();
      return this.#balance;
    }

    getOwner() {
      return this.#accountOwner;
    }

    deposit(money) {
      this.checkIsOpen();
      this.#balance += money;
    }

    withDraw(money) {
      this.checkIsOpen();
      const remain = this.#balance - money;

      if (remain < 0)
        throw new Error('Insufficient funds');

      this.#balance = remain;
    }

    closeAccount() {
      this.checkIsOpen();
      this.#isOpened = false;
    }

    checkIsOpen() {
      if (!this.#isOpened)
        throw new Error('Account is closed');
    }
  }

  const bank = new Bank("Мой Банк");

  const client1 = new Client("Иван", 25);
  const client2 = new Client("Мария", 30);

  bank.addClient(client1);
  bank.addClient(client2);

  bank.displayInfo();

  bank.openAccount(client1, 200);
  bank.openAccount(client2, 300);
  bank.openAccount(client1, 500);

  bank.deposit(0, 1000);
  bank.checkBalance(0);
  bank.withDraw(0, 100);
  bank.checkBalance(0);
}

task7_3();
