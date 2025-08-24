# 🚀 Mohammed Alawlaqi - Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-06B6D4.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.12.1-red.svg)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmohammed-alawlaqi.com)](https://mohammed-alawlaqi.com/)
[![GitHub stars](https://img.shields.io/github/stars/Mohammed-M97/Portfolio?style=social)](https://github.com/Mohammed-M97/Portfolio)

> A modern, responsive portfolio website showcasing my journey as a Full Stack Developer, featuring interactive project galleries, smooth animations, and a clean design.

## 📋 Table of Contents

- [🌟 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎯 Featured Projects](#-featured-projects)
- [🎨 Customization](#-customization)
- [📧 Contact](#-contact)
- [📄 License](#-license)

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://mohammed-alawlaqi.com/)**

## 📸 Screenshots

![Portfolio Home](./docs/portfolio01.png)
![Projects Gallery](./docs/portfolio03.png)
![About Section](./docs/portfolio02.png)

## ✨ Features

### 🎨 **Design & UX**
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark Theme** - Professional dark mode interface
- **Smooth Animations** - Engaging hover effects and transitions
- **Interactive Elements** - Dynamic project carousels and navigation

### 🛠️ **Technical Features**
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing with lazy loading
- **Tailwind CSS** - Utility-first CSS framework
- **Error Boundaries** - Graceful error handling and recovery
- **Performance Optimized** - Code splitting and lazy loading
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation

### 📱 **Sections**
- **Home** - Hero section with introduction
- **About** - Professional background and skills
- **Skills** - Technology stack with interactive icons
- **Projects** - Showcase of featured work with detailed views
- **Contact** - Contact form with email integration
- **Media** - Social media and professional links

## 🛠️ Technology Stack

### **Frontend**
- **React** 18.2.0 - UI library
- **React Router DOM** 6.12.1 - Client-side routing
- **Tailwind CSS** 3.3.2 - Styling framework
- **React Icons** 4.9.0 - Icon library

### **Additional Libraries**
- **React Scroll** - Smooth scrolling navigation
- **React Switch** - Toggle components
- **React Responsive** - Responsive design utilities
- **FontAwesome** - Additional icons

### **Development Tools**
- **Create React App** - Project bootstrapping
- **ESLint** - Code linting
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammed-M97/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with fallbacks

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── ErrorBoundary.jsx # Error handling
│   ├── Home.jsx        # Hero section
│   ├── Media.jsx       # Social media links
│   ├── Navbar.jsx      # Navigation component
│   ├── Skills.jsx      # Skills showcase
│   └── Work.jsx        # Projects overview
├── projects/           # Individual project pages
│   ├── Chatapp.jsx     # Chat application project
│   ├── ServicesApp.jsx # Services platform project
│   ├── Spark.jsx       # Social media project
│   └── Toyzer.jsx      # E-commerce project
├── assets/             # Static assets
│   ├── projects/       # Project images
│   └── *.png          # Technology icons
├── data/
│   └── data.js         # Project data configuration
├── App.js              # Main app component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🎯 Featured Projects

### 🌟 **Spark Social Media**
- **Tech Stack**: HTML5, Bootstrap, JavaScript
- **Features**: Photo sharing, user interactions, trending content
- **Live Demo**: [Spark App](https://spark-soical-media.netlify.app/)

### 🎓 **Services Learning Platform**
- **Tech Stack**: HTML5, Bootstrap, JavaScript, PHP, MySQL
- **Features**: Course management, user dashboard, admin panel
- **GitHub**: [Services App](https://github.com/Mohammed-M97/Services-App)

### 💬 **Real-time Chat Application**
- **Tech Stack**: HTML5, Bootstrap, JavaScript, PHP, MySQL
- **Features**: Real-time messaging, user authentication
- **GitHub**: [Chat App](https://github.com/Mohammed-M97/Realtime-Chat-App-client)

### 🛒 **Toyzer E-commerce Platform**
- **Tech Stack**: HTML5, Bootstrap, JavaScript
- **Features**: Product catalog, shopping cart, secure payments

## 🎨 Customization

### **Colors & Theme**
The color scheme is defined in `src/index.css`:
```css
.dark {
    --background: #0a192f;
    --textmaincolor: #e5e7eb;
    --textcolor: #8892b0;
    --buttonbg: #db2777;
    --border-color: #fff;
}
```

### **Adding New Projects**
1. Add project data to `src/data/data.js`
2. Create project component in `src/projects/`
3. Add route in `src/App.js`

## � Deployment

### **Netlify (Recommended)**
1. Fork this repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### **Manual Deployment**
```bash
npm run build
# Upload the 'build' folder to your hosting provider
```

### **Environment Variables**
Create a `.env` file for any environment-specific configurations:
```env
REACT_APP_CONTACT_FORM_URL=your_form_endpoint
```

## �📧 Contact

**Mohammed Alawlaqi**
- 📧 Email: [Mohammed-Alawlaqi@outlook.com](mailto:Mohammed-Alawlaqi@outlook.com)
- 💼 LinkedIn: [mohammed-alawlaqi](https://www.linkedin.com/in/mohammed-alawlaqi/)
- 🐱 GitHub: [Mohammed-M97](https://github.com/Mohammed-M97)
- 📄 Resume: [View Resume](https://drive.google.com/file/d/1PtpVU32hROqPcDeYiTwICbvZbUtHO6Im/view?usp=sharing)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mohammed-M97/Portfolio/issues).

### **How to Contribute**
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Analytics & Stats

- **GitHub Stars**: ![GitHub Repo stars](https://img.shields.io/github/stars/Mohammed-M97/Portfolio?style=social)
- **GitHub Forks**: ![GitHub forks](https://img.shields.io/github/forks/Mohammed-M97/Portfolio?style=social)
- **GitHub Watchers**: ![GitHub watchers](https://img.shields.io/github/watchers/Mohammed-M97/Portfolio?style=social)
- **Last Commit**: ![GitHub last commit](https://img.shields.io/github/last-commit/Mohammed-M97/Portfolio)

## �🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **React Icons** - For the comprehensive icon library
- **Netlify** - For easy deployment and hosting

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ by [Mohammed Alawlaqi](https://github.com/Mohammed-M97)
