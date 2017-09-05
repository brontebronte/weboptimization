## Getting started

### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Change the path on terminal, to your project folder.
2. Get a local 8000 host

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer
  ```

3. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.
4. Open a separate terminal window, and include the commands below (ensure to change the cd again).

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8000
  ```

5. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!



### Part 2: Changes Done to Optimize the Webpage

#### index.html
1. Moved the script files to the bottom, just before the closing body tag.
2. Included async to the scripts.
3. Inlined, minified and concatenated the CSS file.
4. Minified index.html, original index.html is located the folder 'original-index'.

#### main.js (for views/pizza)
1. Created a var for `document.body.scrollTop` and `document.getElementById("movingPizzas1")` (also changed from querySelectorAll to getElementbyId) for the sliding pizza event.
2. Adjusted the for loop length from 200 to 30, at the generated pizza event listener.
3. Bottleneck for the changePizza function, simplified the codes removing the dx element. Rather than having two switch cases as well, to condense it into one.
4. Changed the for loop in changePizza by inserting `document.getElementsByClassName("randomPizzaContainer")` into a variable.
5. Images were all also resized and minified.
6. JS and CSS files were minified.

#### How the Gulp Task Runner was built (after changes to both documents)
1. Install gulp globally
```bash
$> npm install --global gulp-cli
```

2. Ensure a package.json and node_module file is inserted into your project folder.
3. Install gulp into your project folder, locally.
4. Create a gulpfile.js at the root directory of the project folder.
```bash
$> cd / your-file-path
$> npm init
$> npm install --save-dev gulp
$> touch gulpfile.js
```
5. Installed devDependencies such as minify, uglify, responsive-images, concat etc.

6. Changed all files to the respective minified files.

7. Tip: Check if gulp was successfully downloaded by typing the following command line `gulp -v` .
