# Welcome to the Winston

I mean you and I both know that this is the readme for my portfolio site. I am a JS dev primrarially so it's shouldn't be too surprising that I used `create-react-app`

`¯\_(ツ)_/¯`

## So here we are... Design Desicions

Some of the tech used in this project include

- File Structure
- React (create-react-app)
- React Router
- Ant Design
- ES6 (and Beyond!)

The File Structure is modeled like a Tree, I choose this format to take advantage of ES6 modules and so that components would generally be nest directly under their parents. Obviously some components have to be pulled to the root (in the shared dir) of the tree because they are used in more than one place but in the majority of cases it makes things fairly straight forward.

React is a natural choice for me, I enjoy many of the conviences that it provides (statefulness for one) particularly with CRA.

React Router because even though this project didn't really require routes (honestly a portfolio should probably be a true SPA) but it's fun to be able to show some of my personal interest without having to throw them in with the professional parts of the site.

Ant Design provided a lot of power in not having to design possible complex components and controls while providing the freedom to wrap my own components around them and create more powerful controls (like a nav button that works with react router and ant)

ES6... I mean, as a JS dev who doesn't hate themselves; ofcourse I use ES6.

## `TODO:` things to finish

- finish readme
- find/create/comission favicon
- fill out nav elements
- Home route
- about route
- projects route
- stylinge

## Finished `TODO:`'s

- boilerplate script
- basic routing
- fill out jsconfig.json
