![Preview Image](./src/assets/logo.svg)

# GreenSeed: Virtual Plant Growth System 🌱

GreenSeed offers a dynamic simulation of plant growth, providing immediate visual feedback based on varying inputs and conditions.

You're able to track real-time insights and responsiveness to help understand plant behavior and growth patterns.

## Core Features to Expand App 🚀

- [ ] User Account Management: Simple user management system to save and manage user-specific plant simulations.
- [ ] Plant Selection Library: A curated list of a few common plants/crops. Each choice will have basic growth patterns and requirements.
- [ ] Interactive Growth Simulator:
  - Growth Visualization: Display a graphical representation of the plant's stages.
  - User-defined Inputs: Interactive sliders/input fields for water and sunlight, with the plant's visualization responding in real-time to changes.
- [ ] Weather Integration: Adapt simulations based on weather data.
- [ ] Growth Timeline & Playback: A timeline to show the growth progression, allowing users to "play" the simulation or scrub through stages.
- [ ] Notifications & Alerts:
  - Real-time pop-up alerts for events like reaching a growth milestone or highlighting cases i.e, "over-watering"

## Development Setup

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Storage

We are using LocalStorage to store key-value pairs in a web browser. The localStorage object stores the data with no expiration time. Data stored will persist even after the browser is closed.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
