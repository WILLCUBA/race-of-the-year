const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'T-Shirts' },
    { name: 'Running Shorts' },
    { name: 'Running Shoes' },
    { name: 'Water Bottles' },
    { name: 'Sun Screen' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Mens T-Shirt',
      description:
        'Running Mens T-shirt, breathable, comformtable & sweat-proof',
      image: '1.jpg',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Womens T-Shirt',
      description:
        'Running Womens T-Shirt, breathable, comfortable & sweat-proof',
      image: '2.jpg',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Mens Running Shorts',
      category: categories[4]._id,
      description:
        'The best for running marathons',
      image: '3.jpg',
      price: 45.99,
      quantity: 50
    },
    {
      name: 'Womens Running Shorts',
      category: categories[4]._id,
      description:
        'The best for running marathons, also, they are squat-proof',
      image: '4.jpg',
      price: 45.99,
      quantity: 50
    },
    {
      name: 'Mens Running Shoes',
      category: categories[1]._id,
      description:
        'Trail & Track Running Shoes, made for marathons',
      image: '5.jpg',
      price: 79.99,
      quantity: 20
    },
    {
      name: 'Womens Running Shoes',
      category: categories[1]._id,
      description:
        'Trail & Track Running Shoes, made for marathons',
      image: '6.jpg',
      price: 79.99,
      quantity: 50
    },
    {
      name: 'Water Bottle',
      category: categories[2]._id,
      description:
        'Reduce, reuse, recycle & take your water everywhere!',
      image: '7.jpg',
      price: 30.99,
      quantity: 30
    },
    {
      name: 'Water Bottle',
      category: categories[2]._id,
      description:
        'Reduce, reuse, recycle & take your water everywhere!',
      image: '8.jpg',
      price: 30.99,
      quantity: 30
    },
    {
      name: 'Face Sunscreen - SPF 50',
      category: categories[3]._id,
      description:
        ' Protect your face & avoid premature wrinkles',
      image: '9.jpg',
      price: 30.99,
      quantity: 40
    },
    {
      name: 'Body Sunscreen - SPF 50',
      category: categories[4]._id,
      description: 'Do not be lobster, protect your body from nasty sunburns.',
      image: '10.jpg',
      price: 50.99,
      quantity: 40
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Tim',
    lastName: 'McDonald',
    email: 'ehowerewrewrewrlt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Pepe',
    lastName: 'El Trompeta',
    email: 'pepito@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'sdasadsad@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'ehosadfdasfflt@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'ehoasdsadasdaslt@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholtasdasdsafsaf@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholtasdwqeqw@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholweret@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'ehoewrewrwerlt@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholwerewrwet@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholewrewrwet@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'eholewrewrewt@testmail.com',
    password: 'password12345'
  });
  await User.create({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'ehoewrwerewlt@testmail.com',
    password: 'password12345'
  });
  console.log('users seeded');

  process.exit();
});
