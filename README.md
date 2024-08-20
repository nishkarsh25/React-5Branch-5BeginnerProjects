# AddToCart App

## Overview

The AddToCart App is a simple e-commerce application built with React. It allows users to browse through a list of products, add items to their cart, and view their cart with a summary of the total price and quantity of items. The application consists of three main components: Navbar, Shop, and Cart.

## Live Demo

You can try out the live demo of the app [here](https://react-5branch-5beginnerprojects.onrender.com/).

## Folder Structure

```
AddToCart-app/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── Components/
│   │   ├── Card.jsx
│   │   ├── Cart.jsx
│   │   ├── NavBar.jsx
│   │   └── Shop.jsx
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── product1.jpg
│   │   │   ├── product2.jpg
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

```

## Components

### Navbar
The Navbar component displays the application title and the current number of items in the cart. It also provides navigation options to switch between the Shop and Cart views.

### Shop
The Shop component is responsible for rendering a list of products available for purchase. Each product is displayed as a Card component, which includes the product's image, title, author, price, and an "Add to Cart" button. Users can click on the button to add the item to their cart.

### Cart
The Cart component displays the items that the user has added to their cart. It provides options to remove items from the cart, adjust the quantity of items, and view the total price of the cart.


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-5Branch-5BeginnerProjects/blob/AddToCartProject/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 
<img src="https://github.com/nishkarsh25/React-5Branch-5BeginnerProjects/blob/AddToCartProject/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **useState Hook**: React hook for managing state in functional components.
- **Components**: Modular building blocks used to compose the UI, including Navbar, Shop, Cart, and Card components.
- **CSS**: Styling is done using Tailwind CSS, providing a utility-first approach to CSS.
- **FontAwesome**: FontAwesome icons are used for visual elements such as the shopping cart icon.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/React-5Branch-5BeginnerProjects.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How to Use

1. **Browsing Products**: Upon opening the application, you will be directed to the Shop view where you can browse through the list of products available for purchase.

2. **Adding Items to Cart**: To add an item to your cart, click on the "Add to Cart" button displayed on the product card. The item will be added to your cart.

3. **Viewing Cart**: You can view the items you've added to your cart by clicking on the shopping cart icon in the Navbar. This will take you to the Cart view.

4. **Managing Cart**: In the Cart view, you can adjust the quantity of items or remove items from your cart as needed. Changes to the cart will be reflected in the total price and quantity displayed.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

