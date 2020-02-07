<p align="center">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
  <a href="https://developers.blockmatic.io">
		<img src="https://img.shields.io/badge/code%20style-blockmatic-brightgreen.svg" alt="Blockmatic Standard">
	</a>
	<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT" />
	<a href="https://twitter.com/intent/follow?screen_name=telosdreamstack">
		<img src="https://img.shields.io/twitter/follow/telosdreamstack.svg?style=social&logo=twitter" alt="Follow on Twitter" />
	</a>
	<a href="https://t.me/telosdreamstack">
		<img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue?style=social&logo=telegram" alt="Chat on Telegram">
	</a>
</p>

# DreamStack ReactJS Starter

Jumpstart your TELOS ReactJS project with TypeScript, Hooks, Theme UI, Wallets and i18n support.

## TELOS

Best in class C++ EOSIO protocol technology providing fast, scalable and eco-freindly blockchain augmented by a growing library of Telos services and innovations. Free accounts, work proposals, dapp grants, decentralized exchange, dstor, bancor protocol, telos community and foundation.

[Learn more](https://docs.telosdreamstack.io/smart-contracts/telos-blockchain)

## ReactJS

Next.js extends React to provide a powerful method for loading a page's initial data, no matter where it is coming from. React is a high performant framework backed by Facebook that allows to build modern single page applications, that means no page reloads. This is the technology we have chosen for the User Interface because:

- It has a large ecosystem (tools and components) and community (support).
- It is lightweight.
- It allows you to write composable code (which is always desirable).

## Disclaimer

This is a work in progress. Feel free to reach us out on telegram for clarifications.
https://t.me/telosdreamstack

## Features

- [ ] Wallet integration with EOS Transit thru @blockmatic/eosio-hooks
- [ ] Basic demo page. Read data example and docs.
- [ ] Push transactions example.
- [x] Functional TypeScript.
- [x] Blockmatic code conventions. ( functional, declarative, hooks )
- [x] Pre-commit code quality git hooks with husky, prettier and eslint.
- [x] CSS-in-JS styling based on design system constraints with Theme UI.
- [x] Automatic transpilation and bundling (with webpack and babel).
- [ ] Multilanguage (i18n) with i18next.
- [x] Non relative (absolute) imports.
- [x] Component Error Boundaries.
- [x] Hot code reloading.
- [ ] Serverless continuous deployment with Netlify.
- [ ] Automatic testing with Jest.
- ...

## File Structure

```
.
├── components ......................................... Reusable Components
│   ├── Button.tsx
│   ├── Form.tsx
│   ├── NavBar.tsx
│   └── ...
├── hooks .............................................. React Hooks
│   ├── useCustomHook.js
│   └── ...
├── routes ............................................. Route Container Components
│   ├── Users.tsx
│   └── ...
├── public ............................................. Static file serving
└── library ............................................ Scripts, Services, SDKS,...
    └── amplify.ts
```

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint && yarn lint --fix`

... eslint

### `yarn format`

... prettier

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

## Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

## Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

## Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/telosdreamstack/telos-react-starter)


## TELOS DreamStack

This repository is part of the TELOS DreamStack Project which provides set of guidelines, tools and starters to speed up dApp development following best practices for security, performance and maintainability of your application.

The code style convention aims to maximize reusability and facilitate collaboration. We have chosen the stack carefully so that it allows us to write robust and performant applications with more concise and readable code.

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://gaboesquivel.com"><img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;" alt="Gabo Esquivel"/><br /><sub><b>Gabo Esquivel</b></sub></a><br /><a href="#ideas-gaboesquivel" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=gaboesquivel" title="Code">💻</a> <a href="#review-gaboesquivel" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://rfreites.now.sh/"><img src="https://avatars1.githubusercontent.com/u/16639855?v=4" width="100px;" alt="Ronny"/><br /><sub><b>Ronny</b></sub></a><br /><a href="#ideas-rfreites" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=rfreites" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JeffBriCR"><img src="https://avatars2.githubusercontent.com/u/1731975?v=4" width="100px;" alt="Jeffrey Briceño"/><br /><sub><b>Jeffrey Briceño</b></sub></a><br /><a href="#ideas-JeffBriCR" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=JeffBriCR" title="Code">💻</a> <a href="#review-JeffBriCR" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Blockmatic

Blockmatic is building robust ecosystem of people and tools for development of decentralized applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png (twitter icon without padding)
[2.2]: http://i.imgur.com/fep1WsG.png (facebook icon without padding)
[3.2]: http://i.imgur.com/9I6NRUm.png (github icon without padding)


<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
