function task8_1() {
  /*
  Задание 1: ""Управление персоналом компании""
  
  Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
  
  Свойство name (имя) - строка, имя сотрудника.
  Метод displayInfo() - выводит информацию о сотруднике (имя).
  Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
  
  Свойство department (отдел) - строка, отдел, в котором работает менеджер.
  Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
  // Пример использования классов
  const employee = new Employee(""John Smith"");
  employee.displayInfo();
  // Вывод:
  // Name: John Smith
  
  const manager = new Manager(""Jane Doe"", ""Sales"");
  manager.displayInfo();
  // Вывод:
  // Name: Jane Doe
  // Department: Sales
  */

  class Employee {
    #name;

    constructor(name) {
      this.#name = name;
    }

    displayInfo() {
      console.log('Name: ' + this.#name);
    }
  }

  class Manager extends Employee {
    #department;

    constructor(name, department) {
      super(name);
      this.#department = department;
    }

    displayInfo() {
      super.displayInfo();
      console.log('Department: ' + this.#department);
    }
  }

  const employee = new Employee("John Smith");
  employee.displayInfo();
  const manager = new Manager("Jane Doe", "Sales");
  manager.displayInfo();

}

function task8_2() {
  /*
  ""Управление списком заказов""

  Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

  Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
  Свойство products (продукты) - массив, содержащий список продуктов в заказе.
  Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
  Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

  // Пример использования класса
  class Product {
  constructor(name, price) {
  this.name = name;
  this.price = price;
  }
  }

  const order = new Order(12345);

  const product1 = new Product(""Phone"", 500);
  order.addProduct(product1);

  const product2 = new Product(""Headphones"", 100);
  order.addProduct(product2);

  console.log(order.getTotalPrice()); // Вывод: 600
  */

  class Order {
    #orderNumber;
    #products = [];

    constructor(number) {
      this.#orderNumber = number;
    }

    addProduct(product) {
      this.#products.push(product);
    }

    getTotalPrice() {
      return this.#products.reduce((sum, product) => sum + product.price, 0);
    }
  }

  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const order = new Order(12345);

  const product1 = new Product("Phone", 500);
  order.addProduct(product1);

  const product2 = new Product("Headphones", 100);
  order.addProduct(product2);

  console.log(order.getTotalPrice()); // Вывод: 600
}

function task8_3() {
  /*
  Задача необязательная для выполнения
  
  Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
  Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods
  
  const student = new Student();
  student.setName('Питер Паркер);
  student.setAge(20);
  student.setAverageGrade(85);
  student.displayInfo();
  */

  class Student {
    #name;
    #age;
    #averageGrade;

    constructor(name, age, avgMark) {
      this.#name = name;
      this.#age = age;
      this.#averageGrade = avgMark;
    }

    setName(name) {
      this.#name = name;
    }

    getName() {
      return this.#name;
    }

    setAge(age) {
      this.#age = age;
    }

    getAge() {
      return age;
    }

    setAverageGrade(mark) {
      this.#averageGrade = mark;
    }

    getAverageGrade() {
      return this.#averageGrade;
    }

    displayInfo() {
      console.log(`Student:
      Name: ${this.#name}
      Age: ${this.#age}
      Average grade: ${this.#averageGrade}`);
    }
  }

  const student = new Student();
  student.setName('Питер Паркер');
  student.setAge(20);
  student.setAverageGrade(85);
  student.displayInfo();
}

task8_3();