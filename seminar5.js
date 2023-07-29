function task5_1() {
  /*
  Задание 1 
  Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
  */

  const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
  };
  const checkingValue = 3;

  console.log(Object.values(numbers).filter(number => number >= checkingValue));
}

function task5_2() {
  /*
  Задание 2
  Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
  */

  const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };

  console.log('Autor: ' + post.author);
  console.log('Dislikes: ' + post.comments[0].rating.dislikes);
  console.log('UserId: ' + post.comments[1].userId);
  console.log('Text: ' + post.comments[1].text);

}

function task5_3() {
  /*
  Задание 3
  Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
  */

  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  products.forEach(item => item.price *= 0.85);
  console.log(products);

}

task5_3();