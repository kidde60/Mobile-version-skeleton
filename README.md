![](https://img.shields.io/badge/Microverse-blueviolet)

# Portfolio: details popup window

> For this milestone of your portfolio website, you will implement a popup window that includes the project details in both desktop and mobile. In order to do that, you will need to store the information about your projects in a JavaScript object.


## Built With

- Html
- Css
- JavaScript

## Getting Started
**Clone Your Github Repository**
Follow these steps to clone your Github repo on Windows:
1. Open Git Bash;
- If Git is not already installed, it is super simple. Just go to the Git Download Folder and follow the instructions.
2. Go to the current directory where you want the cloned directory to be added;
- To do this, input cd and add your folder location. You can add the folder location by dragging the folder to Git bash.
- $ cd '/c/Users/Documents/My First Git Project'
3. Go to the page of the repository that you want to clone.
4. Click on “Clone or download” and copy the URL.
5. Use the git clone command along with the copied URL from earlier;
- $ git clone https://github.com/USERNAME/REPOSITORY
6. Press Enter;
- $ git clone https://github.com/USERNAME/REPOSITORY
Cloning into Git …
remote: Counting objects: 13, done.
remote: Compressing objects: 100% (13/13), done.
remove: Total 13 (delta 1), reused 0 (delta 1)
Unpacking objects: 100% (13/13), done.

**Congratulations, you have created your first local clone from your remote Github repository.**


To get a local copy up and running follow these simple example steps.

### Prerequisites
Install operating system that best work for you. -Install the latest version of node. Install your favorite Text Editor

### Setup
1. Set-up linters in your local env
2. The npm package manager is going to create a node_modules directory to install all of your dependencies.You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:
3. you need to initialize npm to create package.json file
4. run npm install --save-dev hint@6.x 
 - add hintrc 
 - run npx hint .
5. .stylelintrc
6. run npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
7. run npx stylelint "**/*.{css,scss}"
8. eslint:
    name: ESLint
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Setup ESLint
        run: |
          npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
          [ -f .eslintrc.json ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.eslintrc.json
      - name: ESLint Report
        run: npx eslint .
  nodechecker:
    name: node_modules checker
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - name: Check node_modules existence
        run: |
          if [ -d "node_modules/" ]; then echo -e "\e[1;31mThe node_modules/ folder was pushed to the repo. Please remove it from the GitHub repository and try again."; echo -e "\e[1;32mYou can set up a .gitignore file with this folder included on it to prevent this from happening in the future." && exit 1; fi


## Live Demo
- [https://kidde60.github.io/](https://kidde60.github.io/Mobile-version-skeleton/)

## Author

👤 **Kidde George William**

- GitHub: [@githubhandle](https://github.com/kidde60)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/george-william-kidde-b5b772231/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/kidde60/my-portifolio/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
