<h1 align="center">Major Weather Hacking</h1>
Major Weather Hacking is an app built using React and fetches weather of your current location. It also suggests you with Food, Hotels recommendations and more in your city as well. There is also a search bar that lets you search for other cities too.

## Installation
1. Fork & Clone the Repository
2. Check whether you have **Node** installed on your system `node --v`
3. Steps for setting up the API key for openweathermap
4. To generate an API key, you have to register on openweathermap:
https://home.openweathermap.org/api_keys
5. Rename example.env to .env and put your API key in REACT_APP_APIKEY variable
4. Install the dependencies with `npm install`
5. Run the project with `npm start`

## Folder Structure
```bash
    └───src
    ├───App.js
    ├───index.js
    ├───assets
    │   └───images
            └───mlh-prep.png
    ├───components
    │   ├───MainNavbar
    │   ├───SecNavbar
    ├───containers
    │   ├───Footer
    │   ├───Header
    │   ├───Hotels
    │   ├───Main
    │   ├───RandomQuote
    │   └───WeatherAPI
```

As per the figma design, this is the layout of the React app which we will be working on.

- `index.js` is the entry point of the app that handles the all the rendering methods.

- `App.js` contains all the components and containers of the app

- `components` and `containers` contain the code for different sections of the app

- We are using [**Tailwind CSS**](https://tailwindcss.com/) to handle all the stylings and [**React-Icons**](https://react-icons.github.io/react-icons/) for the icons as of now.

