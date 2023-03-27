import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Gideon',
      email: 'admin@example.com',
      password: bcrypt.hashSync('test12'),
      isAdmin: true,
    },
    {
      name: 'Byiringiro',
      email: 'user@example.com',
      password: bcrypt.hashSync('test12'),
      isAdmin: false,
    },
  ],
    products: [
      {
        // _id: '1',
        name: 'coriander',
        slug: 'leaf vegetable',
        category: 'Vegetables ',
        image: '/images/coriander.jpg',
        price: 65,
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id: '2',
        name: 'PineApple',
        slug: 'Tropical Fruits',
        category: 'Fruits',
        image: '/images/Tropical.jpg',
        price: 250,
        countInStock: 21,
        rating: 4.0,
        numReviews: 10,
        description: 'Tropical Fruits',
      },
      {
        // _id: '3',
        name: 'Tomatoes',
        slug: 'tomato',
        category: 'Vegetables',
        image: '/images/tomato.jpg',
        price: 65,
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        description: 'Fresh tomato',
      },
      {
        // _id: '4',
        name: 'Lemon',
        slug: 'Citrus Fruits',
        category: 'Fruits',
        image: '/images/Citrus.jpg',
        price: 25,
        countInStock: 15,
        rating: 4.5,
        numReviews: 14,
        description: 'legume fruits',
      },
    ]
  };
export default data;
