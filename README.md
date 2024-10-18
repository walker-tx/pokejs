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
  - [Pagination](#pagination)
  - [Tree Shaking](#tree-shaking)
- [Recipes](#recipes)
  - [Response Caching](#response-caching)
- [Design](#design)
  - [Parallel API & SDK Structure](#parallel-api--sdk-structure)
  - [Robust Typing](#robust-typing)
  - [Thorough JSDoc](#thorough-jsdoc)
  - [Result Pattern](#result-pattern)
  - [Method Signatures & Naming](#method-signatures--naming)
- [Contributing](#contributing)
  - [Process](#process)
  - [Testing](#testing)
- [Roadmap](#roadmap)
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

Once imported, you can find methods on each field that corresponds with the API
groups:

```ts
const result = await PokeJS.pokemon.getPokemonByName("pikachu");

if (result.ok) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

## Documentation

### Results & Error Handling

PokéJS wraps responses in a `Result` object, which is defined as follows:

```ts
export type Result<TValue, TError> =
  | { ok: false; error: TError }
  | { ok: true; data: TValue };
```

Each method in PokéJS returns a `Result` object, allowing for explicit error
handling:

```ts
import { PokeJS } from "pokejs";

const result = await PokeJS.pokemon.getPokemonByName("pikachu");

if (result.ok) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

In this pattern, the result is an object with either a `data` field (if the
request was successful) or an `error` field (if the request failed). This
pattern ensures errors are handled explicitly and not through exceptions.

> NOTE: The `Result` pattern is inspired by the `Go`, `Swift`, and `Rust`
> programming languages. It enables explicit error handling, improving code
> clarity, control flow, and reliability by requiring developers to handle
> errors at each step without relying on exceptions.

### Groups & Methods

PokéJS is organized into groups that correspond to the PokéAPI endpoints. Each
group contains methods that correspond to the API endpoints. The available
groups and methods are as follows:

#### `PokeJS.pokemon`

```ts
getPokemonByName(name: string): Promise<Result<Pokemon, Error>>;
getPokemonById(id: number): Promise<Result<Pokemon, Error>>;
listPokemon(
  paginationInput?: { limit: number, offset: number },
): Promise<
  PaginatedResult<NamedAPIResourceList, Error>
>
```

#### `PokeJS.game`

```ts
getGenerationByName(name: string): Promise<Result<Generation, Error>>;
getGenerationById(id: number): Promise<Result<Generation, Error>>;
listGenerations(
  paginationInput?: { limit: number, offset: number },
): Promise<
  PaginatedResult<NamedAPIResourceList, Error>
>
```

### Pagination

#### Summary

PokéJS makes it easy to handle paginated results when working with large lists.

It should be noted that, upon success, the `list*` methods in PokéJS return
either a `NamedAPIResourceList` or an `APIResourceList`, which don't include the
actual data themselves. Instead, they contain a `results` array where each item
provides a reference URL to an endpoint where you can retrieve the full details.
So, when you use a `list*` method, you're getting a list of resources with basic
info, like names, and you'll need to use the provided URL to make another
request to fetch the complete data. This design helps keep the initial responses
lightweight and efficient.

Hopefully, sometime in the near future, PokéJS will just make this data
lazy-loadable for you!

> For more information on how pagination works with PokéAPI (including
> `NamedAPIResourceList` and `APIResourceList`), refer to the [PokéAPI
> documentation](https://pokeapi.co/docs/v2#resource-listspagination-section).

#### Guide

Here's a quick guide to using pagination with the `list*` methods.

To start, fetch the first page:

By default, the `list*` functions fetch the first 20 items. You can start by
calling a `list*` method like this:

```ts
const result = await PokeJS.game.listGenerations();

if (!result.ok) {
  console.error(result.error.message);
} else {
 . console.log(`Fetched ${result.data.results.length} generations`);
}
```

If you want to fetch more or fewer items, or start from a specific point in the list, use `limit` and `offset`:

```ts
const result = await PokeJS.game.listGenerations({ limit: 10, offset: 0 });

if (result.ok) {
  console.log(`Fetched ${result.data.results.length} generations`);
}
```

- **limit**: Number of items to fetch (e.g., 10).
- **offset**: Where to start (e.g., 0 for the first item).

To fetch the next set of items, check if `result.next` exists and call it:

```ts
if (result.ok && result.next) {
  const nextResult = await result.next();
  console.log(`Fetched ${nextResult.data.results.length} more generations`);
}
```

Similarly, you can fetch the previous page by checking `result.previous`:

```ts
if (result.ok && result.previous) {
  const prevResult = await result.previous();
  console.log(`Fetched ${prevResult.data.results.length} previous generations`);
}
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

## Recipes

### Response Caching

PokéAPI doesn't support caching itself, but it can be used alongside libraries
like [TanStack
Query](https://tanstack.com/query/latest/docs/framework/react/overview).

First, install the TanStack Query library for the framework or UI library of
your choosing.

```bash
pnpm add @tanstack/react-query
```

Since we're demonstrating with React, you'll wrap your app in a
`QueryClientProvider`:

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

Then, use `useQuery` to fetch data with PokéJS and cache the response:

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
const result = await PokeJS.game.getGenerationByName("generation-i");

if (result.ok) {
  console.log(result.data);
} else {
  console.error(result.error);
}
```

### Robust Typing

PokéJS is thoroughly typed—no `any`s in sight! This makes it easier to learn and
use by providing clear definitions of functions, parameters, and return types.
This reduces guesswork, helping developers understand how to use the SDK more
quickly and preventing common errors. It also improves tooling support, like
autocompletion and inline documentation, and catches issues at compile time,
leading to fewer runtime errors and a more reliable development process.

### Thorough JSDoc

PokéJS is well-documented, with JSDoc comments on each method and type. The
JSDoc comments include descriptions of the method, parameters, return values,
examples, and links to any corresponding PokéAPI documentation. This should even
help to make the SDK easier to learn and use, since you can explore the SDK
directly in your editor.

### Result Pattern

The `Result` pattern in PokéJS improves predictability by returning a consistent
object with an `ok` flag, making it explicit whether the operation was
successful or not. This forces developers to choose how to handle both success
and failure explicitly, thus reducing unhandled exceptions and crashes.

### Method Signatures & Naming

PokéJS also avoids method overrides and uses clear, single-signature typing. The
API is easier to understand and more consistent. Developers don’t have to flip
through method overrides to find the one they need. Methods are named very
explicitly, describing the kind of parameter they're expecting (e.g., `name` or
`id`), to make code easier to read at a glance.

#### Pagination

The pagination system in PokéJS is easier and safer than using the next and
previous URLs from PokéAPI. Instead of dealing with URLs directly, PokéJS gives
you next() and previous() methods that are built-in and fully typed. This makes
it more reliable and reduces the chance of errors, so you can move between pages
of results without worrying about handling URLs yourself. It keeps your code
cleaner and ensures everything works smoothly with TypeScript’s type safety.

## Contributing

### Process

To contribute to PokéJS, follow this process:

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

This ensures a structured, collaborative process when contributing to the
library.

### Testing

To run the tests for PokéJS, you can use the following command from the root of the cloned repository:

```bash
pnpm run test
```

## Roadmap for PokéJS

### Expanded Feature Set

The aim is to make PokéJS to cover more endpoints from PokéAPI, providing a
broader range of data and utilities for developers working with Pokémon data.
This will ensure that PokéJS continues to evolve as a complete and reliable tool
for interacting with PokéAPI.

### Lazy Loading for NamedAPIResource Items

In the future, PokéJS will support lazy loading for `NamedAPIResource` items.
Instead of requiring developers to manually fetch detailed data for each
resource, PokéJS will handle it automatically when the data is accessed. This
will keep API calls strongly-typed, ensure data consistency, and eliminate the
need for developers to write their own fetch logic, significantly reducing
boilerplate code. With lazy loading, developers will be able to rely on PokéJS
to handle data retrieval seamlessly, making the SDK more efficient and easier to
use.

## License

This project is licensed under the terms of the MIT license.
