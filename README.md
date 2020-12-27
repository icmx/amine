# Amine

Simple CSS library, currently in active development.

You can see the demo at [icmx.github.io/amine](https://icmx.github.io/amine)

## Features

*Please note that due to active development some of features are just a goals for now and not ready yet*.

  - **BEM**: uses "Block, Element, Modifier" methodology which keeps code simple, easy to maintain and understand
  - **Isolated**: does not affect on other styles and frameworks due to namespace isolation
  - **Adaptive**: allows to create mobile and desktop-friendly interfaces
  - **Flex**: mostly based on easy to use CSS Flex specifications
  - **Simple and small**: structured and clean code, up to 10kb minified and gzipped (about 6kb currently)
  - **Good forms styling**: rich style options for all standard form widgets like buttons, inputs, checkboxes, radios etc. (mostly implemented)
  - **Rems**: uses `rem` as main scale units (mostly implemented)

## Development

```sh
# clone amine repository
git clone https://github.com/icmx/amine

# switch to the local copy
cd amine

# install dependencies
npm install

# launch it for development -- amine demo is available at localhost:8000
npm run serve

# build it for production
npm run build
```

## License

[MIT](LICENSE).
