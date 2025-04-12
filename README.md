# Web-based Game Platform with RESTful Ranking System

A web-based gaming platform featuring classic games with user authentication and global leaderboards.

## 🎮 [Demo Video](https://www.youtube.com/watch?v=KEuYRHmM3rA)

## Project Overview

This platform combines nostalgic arcade-style gaming with modern web technologies. Players can create accounts, play multiple games, and compete for top positions on global leaderboards. The project leverages RESTful API design principles to handle user data and game scores.

## Features

- **User Authentication System**: Secure registration and login with SHA1 password hashing
- **Multiple Games**: Currently featuring Whack-a-Mole and Snake games
- **Global Leaderboards**: Track and display top scores for each game
- **Responsive Design**: Enjoyable gaming experience across different devices
- **RESTful API Architecture**: Clean separation between frontend and backend

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- jQuery
- EJS (Embedded JavaScript templates)

### Backend
- Node.js
- Express.js
- SQLite
- RESTful API

### Development Tools
- Postman (API testing)
- ngrok (local testing and deployment)

## API Endpoints

| Purpose | Method | URI |
|---------|--------|-----|
| Get login page | GET | /login |
| Get game 1 data | GET | /game/1 |
| Get game 2 data | GET | /game/2 |
| Get game 1 leaderboard | GET | /ranking/1 |
| Get game 2 leaderboard | GET | /ranking/2 |
| Logout and redirect to login | GET | /logout |
| Get registration page | GET | /register |
| Submit login credentials | POST | /login |
| Submit registration data | POST | /register |
| Submit game score | POST | /leaderboard?scores=[score]&name=[name]&game=[gameId] |


## Usage

1. Register a new account or login with existing credentials
2. Select a game to play from the main menu
3. Compete for high scores on the global leaderboards
4. View your personal game history and achievements

## Future Enhancements

- Daily leaderboard refreshes
- Additional verification methods (CAPTCHA)
- User profile customization
- Score deletion functionality
- Additional games


## License

This project is licensed under the MIT License - see the LICENSE file for details.
