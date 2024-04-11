## My Choices

I've used Vite to build my projects. I like that it's easy to set up, it's fast, and doesn't have a lot of unnecessary things added. It has also gained a lot of popularity in the last few years.

I chose React with Typescript because I enjoy working in React. Adding Typescript makes a project easier to work with and has almost become an industry standard. You can of course switch to any other framework without a problem.

To be able to import and use the different micro front-end projects I've used the Module Federation technique. I like that you can develop the micro front-end projects independently and the complexity it adds to a project is minimal in my opinion. It's easy to use and has good solutions for things like shared dependencies.

## How to run the project

The project has 3 folders, the container that has the menu and 2 micro front-end projects. I’ve only used it in chrome so I can’t guarantee that it’ll work in other browsers.

#### Start micro front-end 1:

Make sure you are in the micro-frontend-1 folder

```bash
npm install
npm run build
npm run preview
```

The project will run on [localhost:8001](http://localhost:8001)

#### Start micro front-end 2:

Make sure you are in the micro-frontend-2 folder

```bash
npm install
npm run build
npm run preview
```

The project will run on [localhost:8002](http://localhost:8002)

#### Start the container:

Make sure you are in the container folder

```bash
npm install
npm run dev
```

The project will run on [localhost:8000](http://localhost:8000)

## Improvements

The project is set up to be used on localhost for now. When you use the micro front-end in production some paths will have to be updated for it to work both on localhost and in production.

Some different tests and tools that I would add to test the micro frontend projects and the container are Jest and React Testing Library to write unit tests for individual React components. For end-to-end tests I would use Cypress or Selenium to verify complete user flows within the micro frontend.

I used very basic styling, there are different approaches to consider to isolate the CSS and contain them to the micro front-end or the components. Some of them I would look at are:

- CSS modules or a library like styled-components to automatically scope styles to the component they belong to.
- Shadow DOM when using web components (example in micro front-end 2)
- Adding unique class names to each micro front-end project that you use to scope the styles to that project (example in micro front-end 1)
