# Namaste-Youtube

Namaste-Youtube is a YouTube clone project developed using React, Redux, and Tailwind CSS. It replicates core functionalities of YouTube while incorporating additional features to enhance user experience.

## Features

- **Hamburger Menu:** Provides seamless navigation with a home icon that redirects users to the home page without triggering a full page reload.
  
- **Search Box:**
  - Utilizes a live API from YouTube for real-time search results.
  - Implements debouncing to optimize search requests.
  - Includes caching mechanisms for improved performance.
  
- **Video Cards:**
  - Utilizes a live API from YouTube for real-time data for thumbnails, descriptions, and view counts.
  - Incorporates YouTube embed functionality to seamlessly display videos within the project interface upon clicking on any video card.
  
- **Comments Section:**
  - Implements a comments section with hard-coded comments due to YouTube API limitations on nested comments.
  - Utilizes recursion to display nested comments.
  
- **Live Chat:** Implements a real-time live chat feature for enhanced user interaction and engagement.

## Getting Started

To get started with Namaste-Youtube, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd namaste-youtube
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

Contributions are welcome! If you'd like to contribute to Namaste-Youtube, please follow these guidelines:

1. Fork the repository and create your branch:

   ```bash
   git checkout -b feature/my-feature
   ```

2. Commit your changes:

   ```bash
   git commit -am 'Add some feature'
   ```

3. Push to the branch:

   ```bash
   git push origin feature/my-feature
   ```

4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the functionalities of YouTube.
- Special thanks to the YouTube API for providing real-time data for video cards and search functionality.
