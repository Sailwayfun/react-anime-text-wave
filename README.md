# React Anime Text Wave

A beautiful text wave animation effect built with React, TypeScript, Vite, and Anime.js v4. This project demonstrates how to create smooth, dynamic text animations that respond to user interaction.

![Demo Animation](demo.gif)

## Features

- 🌊 Smooth wave animation effect on text
- ⚛️ Built with React 18+ and TypeScript
- 🚀 Powered by Vite for lightning-fast development
- 📦 Uses Anime.js v4 for fluid animations
- 🎨 Customizable animation parameters
- 📱 Responsive design

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-anime-text-wave.git
cd react-anime-text-wave
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:43211` to see the application in action.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Usage

```tsx
import TextWave from "./components/TextWave";

function App() {
  const text = [
    { name: "H", id: "1" },
    { name: "e", id: "2" },
    { name: "l", id: "3" },
    { name: "l", id: "4" },
    { name: "o", id: "5" },
  ];

  return <TextWave text={text} index={0} />;
}
```

## Configuration Options

| Prop  | Type                                | Default  | Description                                                   |
| ----- | ----------------------------------- | -------- | ------------------------------------------------------------- |
| text  | Array<{ name: string; id: string }> | required | Array of characters with unique IDs                           |
| index | number                              | required | Index for controlling animation timing between multiple lines |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this in your own projects.

## Acknowledgments

- [Anime.js](https://animejs.com/) for the amazing animation library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://reactjs.org/) for the UI framework
