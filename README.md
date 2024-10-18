![banner](./images/poke-js-banner-tinified.webp)

# PokéJS SDK

PokéJS is a JavaScript SDK that allows you to interact with the
[PokéAPI](https://pokeapi.co/). This library is designed to be easy to learn,
easy to use, and lightweight! As a result, its methods are well-documented,
well-organized, well-typed, and predictable!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Results & Error Handling](#results--error-handling)
  - [Groups & Methods](#groups--methods)
  - [Tree Shaking](#tree-shaking)
  - [Response Caching](#response-caching)
- [Contributing](#contributing)
  - [Process](#process)
  - [Testing](#testing)
- [Design Summary](#design)
  - [Parallel API & SDK Structure](#parallel-api--sdk-structure)
  - [Robust Typing](#robust-typing)
  - [Thorough JSDoc](#thorough-jsdoc)
  - [Result Pattern](#result-pattern)
- [License](#license)

## Installation

To install PokéJS, you can use a package manager like npm, pnpm, or yarn:

```bash
pnpm i https://github.com/walker-tx/pokejs
```

## Usage

The easiest way to get started with PokéJS is to import the `PokeJS` object:

```javascript
import { PokeJS } from "pokejs";
```

Once imported, you can find methods on each field that corresponds with the API groups:

```ts
const [pokemon, error] = await PokeJS.pokemon.getPokemonByName("pikachu");
const [pokemon, error] = await PokeJS.pokemon.getPokemonById(25);
```

## Documentation

### Results & Error Handling

PokéJS wraps responses in a `Result` object, which contains the data and an error object:

```ts
import { PokeJS } from "pokejs";

const [pokemon, error] = await PokeJS.pokemon.getPokemonByName("pikachu");

if (error) {
  console.error(error);
} else {
  console.log(pokemon);
}
```

In this pattern, the first element of the array is the data returned from the
API, and the second is an error object. If the error object is `null`, then the
request was successful.

> NOTE: The `Result` pattern is inspired by the `Go` programming language. It
> enables explicit error handling, improving code clarity, control flow, and
> reliability by requiring developers to handle errors at each step without
> relying on exceptions.

### Groups & Methods

PokéJS is organized into groups that correspond to the PokéAPI endpoints. Each
group contains methods that correspond to the API endpoints. The available
groups and methods are as follows:

#### `PokeJS.pokemon`

```ts
getPokemonByName(name: string): Promise<Result<Pokemon, Error>>;
getPokemonById(id: number): Promise<Result<Pokemon, Error>>;
```

#### `PokeJS.game`

```ts
getGenerationByName(name: string): Promise<Result<Generation, Error>>;
getGenerationById(id: number): Promise<Result<Generation, Error>>;
```

### Response Caching

PokéAPI doesn't support caching itself, but it can be used alongside libraries
like [TanStack
Query](https://tanstack.com/query/latest/docs/framework/react/overview).

First, install the TanStack Query library for the framework or UI library of your choosing.

```bash
pnpm add @tanstack/react-query
```

Since we're demonstrating with React, you'll wrap your app in a `QueryClientProvider`:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  );
};

export default App;
```

Then, use useQuery to fetch data with PokéJS and cache the response:

```tsx
const MyComponent = () => {
  const { data, error, isLoading } = useQuery(["pokemon", "pikachu"], () =>
    PokeJS.pokemon.getPokemonByName("pikachu"),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};
```

### Tree Shaking

For Node 16 and newer, PokéJS is tree-shakeable. Tree shaking helps reduce
bundle size by eliminating unused code. By importing only what you need, your
bundle will be smaller.

```ts
// Import all available groups
import { PokeJS } from "pokejs";

// Import a single method for a group
import { getPokemonById } from "pokejs/pokemon";

// Import all methods for a group
import * as Pokemon from "pokejs/pokemon";
```

## Design

### Parallel API & SDK Structure

PokéJS and PokéAPI use a parallel structure to ensure the SDK mirrors the API’s
organization, making it easier for developers to navigate both. This alignment
allows for a smoother transition, reduces confusion, and simplifies debugging,
as methods and data models in the SDK directly reflect those in the API.

For example, a `group` in PokéAPI is `game` and an endpoint is `generation`.
Thus, in PokéJS, the corresponding group is `PokeJS.game` and the method is
`getGenerationByName`:

```ts
const [data, error] = await PokeJS.game.getGenerationByName("generation-i");
```

### Robust Typing

PokéJS is thoroughly typed - no `any`s in sight! This makes it easier to learn
and use by providing clear definitions of functions, parameters, and return
types. This reduces guesswork, helping developers understand how to use the SDK
more quickly and preventing common errors. It also improves tooling support,
like autocompletion and inline documentation, and catches issues at compile
time, leading to fewer runtime errors and a more reliable development process.

### Thorough JSDoc

PokéJS is well-documented, with JSDoc comments on each method and type. The
JSDoc comments include descriptions of the method, parameters, return values,
examples, and links to any corresponding PokéAPI documentation. This should even
help to make the SDK easier to learn and use, since you can explore the SDK
directly in your editor.

### Result Pattern

The Result pattern in PokéJS improves predictability by returning a consistent
tuple `[data, error]` for every operation. This forces developers to choose how
to handle both success and failure explicitly, thus reducing unhandled
exceptions and crashes.

### Method Signatures & Naming

PokéJS also avoids method overrides and using clear, single-signature typing.
The API easier to understand and more consistent. Developers don’t have to flip
through method overrides to find the one they need. Methods are named very
explicitly, describing the kind of parameter they're expecting (e.g., `name` or
`id`), to make code easier to read at a glance.

## Contributing

### Process

To contribute to the PokéJS library, follow this process:

1. **Fork the Repository**: Create a personal copy of the PokéJS repository on
   GitHub by forking it.
2. **Clone the Fork**: Clone your forked repository to your local machine using
   Git.
3. **Create a New Branch**: Before making any changes, create a new feature or
   bugfix branch (`git checkout -b branch-name`).
4. **Make Changes**: Implement your contribution, whether it’s adding a feature,
   fixing a bug, or improving documentation.
5. **Test Your Changes**: Ensure your changes work as intended by running tests
   or adding new ones, if necessary.
6. **Commit and Push**: Commit your changes with a descriptive message and push
   the branch to your GitHub fork.
7. **Create a Pull Request**: Navigate to the original PokéJS repository, and
   submit a pull request from your fork’s branch to the main repository.
8. **Respond to Feedback**: Collaborate with maintainers to address any feedback
   or requested changes.
9. **Merge**: Once approved, your contribution will be merged into the main
   PokéJS library.

This ensures a structured, collaborative process when contributing to the library.

### Testing

To run the tests for PokéJS, you can use the following command:

```bash
pnpm run test
```

## License

This project is licensed under the terms of the MIT license.
