[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/linucks-io/linucks.io-client">
    <img src="https://i.ibb.co/41wHGgQ/logo.png" alt="Logo" width="175">
  </a>

  <h1 align="center">linucks.io-client</h1>

  <p align="center">
    The frotend repo for linucks.io ✨:sparkles:
    <br />
    <a href="https://github.com/linucks-io/linucks.io-client/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://linucks-io.github.io/linucks.io-client/">View Demo</a>
    ·
    <a href="https://github.com/linucks-io/linucks.io-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/linucks-io/linucks.io-client/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <a href="https://linucks-io.github.io/linucks.io-client">
    <img src="https://i.ibb.co/VQgK4HL/1.png"  alt="product">
    <img src="https://i.ibb.co/JQWpLGG/2.png"  alt="product1">
  </a>
</p>

Check out a live demo [here](https://linucks-io.github.io/linucks.io-client/).


**linucks.io** is a web application where you can test out a range of Linux distros before actually installing in on your system.


Linux is a popular kernel which is used mainly by developers because of the many benefits. Since there are a number of flavours of GNU/Linux, there
are many options to choose from, which can be quite confusing for the user.

**linucks.io** is a one-stop solution for distro-hopping. With this application, we try the user by simulating a virtual environment of the distro of the user's choice. This is the repository for the frontend of the web-application, you can check out the backend on [https://github.com/linucks-io/linucks.io-service/](https://github.com/linucks-io/linucks.io-service/). Every time a user clicks on a distro, a request is sent to the backend, which allocates a docker image for that cluster and returns a SSL encrypted websocket URL for it, which can be accessed using [noVNC](https://github.com/novnc/noVNC) on the browser.


### Built With

* [react](https://reactjs.org)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [react-vnc](https://www.npmjs.com/package/react-vnc)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-dom](https://www.npmjs.com/package/react-dom)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
* node

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/linucks-io/linucks.io-client.git
```
2. Install NPM packages
```sh
npm install
```
3. Add the necessary environment variables to a `.env` file.
```sh
echo "REACT_APP_BACKEND_URL=http://localhost:3001" > .env
```



<!-- USAGE EXAMPLES -->
## Usage

1. Start react app

```sh
npm start
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/linucks-io/linucks.io-client/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.  :smile:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/linucks-io/linucks.io-client.svg?style=flat-square
[issues-url]: https://github.com/linucks-io/linucks.io-client/issues
