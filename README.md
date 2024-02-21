  <div align="center">
  <img src="https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/1df648aa-536d-498f-af8f-c42993935a0c" alt="mainImg"/>
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=1786ab" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  </div>

## 📋 <a name="table">Table of Contents</a>

1. ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) [Introduction](#introduction)
2. 🤖 [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📷 [Screenshots](#screenshots)
7. ![jigsaw (1)](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/316cd490-12f9-4b15-9977-f0d202c1d150) [Contribute](#contribute)

Nike Store a meticulously crafted landing page designed to showcase an exquisite collection of shoes. This project represents not just a passion for creativity and design but also a dedication to leveraging modern web development technologies to deliver a seamless and engaging user experience.

**Here is a live preview for the project _[Nike Store](https://nike-store-mocha-three.vercel.app/)_!**

## <a name="introduction"> ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) Introduction</a>

Nike Store project is a simple yet impactful landing page that brings the world of footwear to life. Developed with ReactJS and Typescript, it ensures a robust and scalable application structure, offering dynamic content rendering and a type-safe coding environment. This combination guarantees a smooth, fast-loading, and interactive user experience, crucial for retaining visitor interest and engagement.

## <a name="tech-stack">🤖 Tech Stack</a>

- ReactJs
- TypeScript
- Tailwind CSS
- Vite

## <a name="features">🔋 Features</a>

👉 **ReactJS and Typescript:** Utilizing the power of ReactJS paired with the type safety of Typescript, "Nike Store" offers a seamless browsing experience with minimal loading times, enhancing user engagement and satisfaction.

👉 **Tailwind CSS:** The use of Tailwind CSS ensures that the project is not only visually appealing but also highly responsive. Tailwind's utility-first approach allows for rapid UI development and design customization, ensuring that "Nike Store" looks great on any device.

👉 **Font Awesome:** To enhance the visual appeal and user interface, Font Awesome icons have been integrated, providing a polished and cohesive look that users find intuitive and engaging.

👉 **Aos (Animate on Scroll):** Incorporating Aos for scroll animations adds a layer of interactivity and dynamism, making the browsing experience more engaging and visually stimulating. It ensures that each shoe is presented in a memorable and captivating manner.

👉 **Dark Mode:** Utilize the power of Tailwind for Dark mode.

👉 **Vite Build Tool**: Vite was used as the replacement of the antiquated, incredibly slow Create React app.

👉 **Pagination**: For easy navigation through a large dataset of clothes, allowing users to explore multiple pages effortlessly.

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

**Cloning the Repository**

```bash
git clone https://github.com/AmrAbouElkair/Nike-Store.git
cd Nike-Store
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm inatall or npm install
```

**Running the Project**

```bash
pnpm dev or npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Palanquin:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

button,
button:focus {
  border: none;
}

@layer components {
  .max-container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .input {
    @apply sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full;
  }
}

@layer utilities {
  .padding {
    @apply sm:px-16 px-8 sm:py-24 py-12;
  }

  .padding-x {
    @apply sm:px-16 px-8;
  }

  .padding-y {
    @apply sm:py-24 py-12;
  }

  .padding-l {
    @apply sm:pl-16 pl-8;
  }

  .padding-r {
    @apply sm:pr-16 pr-8;
  }

  .padding-t {
    @apply sm:pt-24 pt-12;
  }

  .padding-b {
    @apply sm:pb-24 pb-12;
  }

  .info-text {
    @apply font-montserrat text-slate-gray text-lg leading-7;
  }
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
```

</details>

## <a name="screenshots"> 📷 Screenshots</a>

![nik1](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/1df648aa-536d-498f-af8f-c42993935a0c)
![nike2](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/3a7fff80-c799-443d-9da5-608d24680a62)
![nike3](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/498963ee-2367-4e14-86da-1d793baa216a)
![nike4](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/f91b2d6c-4d94-4239-ac92-1c2af23a37fb)
![nike5](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/94f612a3-36b1-4052-8c48-3486432f1718)
![nike6](https://github.com/AmrAbouElkair/Nike-Store/assets/83710148/5c099654-eef8-43c6-a75c-c59c3df89fde)

## <a name="contribute">![jigsaw](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/fa2848f1-94b6-4951-9334-fb9ec40c16a7) Contribute</a>

1. Fork the Project
2. Create your Feature Branch (git checkout -b `new branch`)
3. Commit your Changes (git commit -m 'Add some `commit name`)
4. Push to the Branch (git push origin `new branch`)
5. Open a Pull Request
