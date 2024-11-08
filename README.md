

# Minimalist Weather App ⛅

A clean and minimalist weather application built with React that provides real-time weather information with a beautiful user interface. Features both light and dark modes for optimal viewing experience.

![Weather App Screenshot](screenshot.png)

## 🌟 Features

- **Real-time Weather Data**: Get current weather information using the Open-Meteo API
- **City Search**: Search for weather information by city name
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Minimalist UI**: Clean and intuitive user interface
- **Weather Indicators**: 
  - Temperature
  - Humidity
  - Wind Speed
  - Weather Conditions

## 🚀 Live Demo

[View Live Demo](your-deployed-url-here)

## 🛠️ Built With

- React.js
- Vite
- Open-Meteo API
- CSS3
- JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to the project directory:
```bash
cd weather-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🎯 Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View the current weather information
4. Toggle between dark and light modes using the theme switch

## 📁 Project Structure

```plaintext
weather-app/
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   ├── assets/
│   │   ├── search.png
│   │   ├── clear.png
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

## 🌐 API Reference

This project uses the [Open-Meteo API](https://open-meteo.com/) for weather data:
- Geocoding API: Converts city names to coordinates
- Weather API: Provides current weather information

## 🎨 Color Reference

### Light Mode
```css
Background: #ffffff
Text Primary: #2c3e50
Text Secondary: #95a5a6
```

### Dark Mode
```css
Background: #1a1b1e
Text Primary: #ecf0f1
Text Secondary: #bdc3c7
```

## ✨ Future Enhancements

- [ ] Weather forecast for upcoming days
- [ ] Weather alerts and notifications
- [ ] Multiple location saving
- [ ] More detailed weather information
- [ ] Animated weather icons
- [ ] Unit conversion (Celsius/Fahrenheit)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- Weather icons from [Icon Source Name]
- Open-Meteo for providing the free weather API
- React team for the amazing framework
- Vite for the build tooling

---

## 💻 Development

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Environment Setup

1. No API key is required as we're using the free Open-Meteo API

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

### Code Style

This project uses:
- ESLint for JavaScript linting
- Prettier for code formatting

### Component Structure

```jsx
Weather/
├── Weather.jsx        # Main component logic
├── Weather.css        # Component styles
└── index.js          # Export file
```

## 🔧 Troubleshooting

Common issues and solutions:

1. **City not found**
   - Check the spelling of the city name
   - Try using a more specific city name

2. **Weather data not loading**
   - Check your internet connection
   - Verify the city name is correct
   - Try refreshing the page

3. **Dark mode not persisting**
   - Clear browser cache
   - Check localStorage permissions

## 📱 Responsive Design

The app is responsive across various screen sizes:
- Mobile (320px - 480px)
- Tablet (481px - 768px)
- Desktop (769px and above)

## 🔐 Security

- No API keys required
- No sensitive data stored
- All API calls are made over HTTPS

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance

The app is optimized for performance:
- Lazy loading of images
- Minimal dependencies
- Efficient state management
- Optimized build size
