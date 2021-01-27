# zakiii.com

The code for [zakiii.com](https://zakiii.com), a website for Algerian open-source community.

## Meta

You can find more about each folder by clicking on the folder name

| Folder               | Coverage                                                                                                                       |                           Production URL |                                          Staging URL |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------: | ---------------------------------------------------: |
| [./web](./web)       | [![codecov](https://codecov.io/gh/ZibanPirate/zakiii.com/graph/badge.svg?flag=web)](https://codecov.io/gh/ZibanPirate/zakiii.com)    |           [zakiii.com](https://zakiii.com) |           [stage.zakiii.com](https://stage.zakiii.com) |
| [./data](./data)     | [![codecov](https://codecov.io/gh/ZibanPirate/zakiii.com/graph/badge.svg?flag=data)](https://codecov.io/gh/ZibanPirate/zakiii.com)   | [data.zakiii.com](https://data.zakiii.com) | [data.stage.zakiii.com](https://data.stage.zakiii.com) |
| [./common](./common) | [![codecov](https://codecov.io/gh/ZibanPirate/zakiii.com/graph/badge.svg?flag=common)](https://codecov.io/gh/ZibanPirate/zakiii.com) |                                          |                                                      |

## Table of Content

- [zakiii.com](#zakiiicom)
  - [Meta](#meta)
  - [Table of Content](#table-of-content)
  - [Get Started](#get-started)
    - [Perquisites](#perquisites)
    - [Run it locally](#run-it-locally)
  - [Contributing](#contributing)
    - [Before You Create a Pull Request](#before-you-create-a-pull-request)
  - [License](#license)

## Get Started

### Perquisites

Make sure you have:

- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/) version 10 or higher
- [Yarn](https://yarnpkg.com/) version 1 or higher

### Run it locally

- Open terminal and clone the repo:

```sh
 git clone https://github.com/ZibanPirate/zakiii.com.git
```

- Make **sure** you are in the project **root**:

```sh
 cd zakiii.com
```

- Install dependencies:

```sh
yarn
```

- Run it locally

```sh
yarn dev
```

- For web server to <http://localhost:8080>
- For data server go to <http://localhost:9090>

## Contributing

To get started see [the contributing guidelines](https://github.com/ZibanPirate/zakiii.com/blob/master/.github/CONTRIBUTING.md).


### Before You Create a Pull Request
- If you already forked the repository, please make sure your fork is up-to-date, following [this simple steps](https://www.dzcode.io/Learn/Git_Basics/Syncing_An_Old_Forked_Repository_With_Upstream).
- Please make sure your code follows the style guideline defined in this repo, for that simply run `yarn lint:fix` to ensure the conformity. This process should happen automatically whenever you commit your changes, but you can always do it manually when your Pull Request checks are failing due to linting errors.

## License

Copyright (c) 2020 zakiii.com (twitter: [@zibanpirate](https://twitter.com/zibanpirate)) Licensed under the MIT license.
