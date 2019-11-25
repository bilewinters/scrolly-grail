# Scrolly Grail

This repo investigates various ways of building a scrolling grid in react-native, with the following goals:

- Working well on iOS and Android
- Allowing for a fixed header row
- Allowing for a fixed lefthand column
- With the ability to scroll horizontally and vertically at the same time

It shows through a series of examples a pattern (and some pitfalls...) that can be used for this. It is only meant as an investigation of this topic, and shows that there isn't a Holy Grail of scrolling grids,
just lots of tradeoffs you need to make and decide on, depending on what you want to achieve.

# How to run

This project uses [expo](https://expo.io), so if you are familiar with it, you should be able to get up and running quickly. You will also need [node](https://nodejs.org) and any simulators / emulators you wish to use.

Otherwise:

```
# Install dependencies
yarn

# Start the packager
yarn start

# Once the expo packager is started either use their web interface to run on an
# installed simulator/emulator by pressing 'i' or 'a' as appropriate...

# Or use the expo web view (http://localhost:19002/) and press the relevant buttons...

# Or to open on a physical device, install the expo client from your app store and scan
# the QR code to get started

```

# Motivation

This repo is supposed to accompany this talk:

[![Scrolly Grail Video](https://img.youtube.com/vi/NHQXLHwpImU/0.jpg)](https://www.youtube.com/watch?v=NHQXLHwpImU)
