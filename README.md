# Floorplan Widget
A floorplan widget reusable for multiple projects of C.O.S.O.C by Bin Huang

## How to setup

Install node dependencies
```bash
npm i
```

## Run dev mode

To see the changes locally
```bash
npm run dev
```

Then select the project to use in the list.

## How to use it in prod

Just copy the follow code and replace it with the name of the respective project app. (This example use `palma` project). 
```html
<div id="app"></div>
<script async crossorigin type="module" src="https://bin-cosoc.github.io/floorplan-widget/palma.js"></script>
<link rel="stylesheet" crossorigin href="https://bin-cosoc.github.io/floorplan-widget/assets/palma.css">
```