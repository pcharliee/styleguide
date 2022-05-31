# [WIP] - Init - Styleguide
## _The Greatest for the Greatest_

✨This will eventually be a 'plug and use' styleguide✨

## Getting started

- Once installed, on your root folder create a `styleguide` folder with a `src` subfolder
    - Inside `src` create a `defaults.js` file and copy the contents from `node_modules/init-styleguide/src/defaults.js`
    - Rename the `defaults['<componentName>']` on the created file to match the project naming convention. Modify the props too
- On your `components/templates` folder, create a subfolder called `styleguide` and copy the contents from `node_modules/init-styleguide/components/templates/styleguide` to that folder (both .css and .jsx files)
    - Rename the `filter` (line #4) and `componentHighlights` (line #7) to match the project
- Add this script to your package.json on your root folder 
    ```json
    "styleguide": "cd node_modules/init-styleguide/dev && npm run build",
    "watch": "cd node_modules/init-styleguide/dev && npx grunt watch",
    ```
- Open your terminal in the root folder and run `cd node_modules/init-styleguide && npm run start`
- On your terminal go back to the root folder and run `npm run styleguide`
    >(This must be run everytime you modify the `defaults.js`)
- For watching changes live, run `npm run watch`

## Development

Want to contribute? Great!

**init, LFG!**