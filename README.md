# FilterLib
A Full-stack Library for image filters such as sepia, grayscale with upload support to server implemented with JavaScript (ES6) and PHP
## Usage
To make use of the package, include the FilterLib.js file into the HTML Page you want to apply the filters. The requirements are at least an image and a Canvas.Once you have done that, you are able to access the FilterLib class and make use of its methods such as grayscale(), sepia() etc. It also helps you upload the files with a randomly unique generated file name and in JPG format with the use of the pushFile() method. Below is a list of the methods the class has to offer:

<ul>
  <li>gray()</li>
  <li>strange()</li>
  <li>invert()</li>
  <li>cold()</li>
  <li>hot()</li>
  <li>bluey()</li>
  <li>dark()</li>
  <li>light()</li>
  <li>sepia()</li>
  <li>patch()</li>
  <li>brightness()</li>
  <li>contrast()</li>
  <li>pushFile()</li>
</ul>
        
Each of the methods above take two parameters except the pushFile, contrast and brightness. In order to use the gray, sepia etc methods, we will take a look at two examples. The library also provides you with a simplified way to reference the document.getElementById() function property. Consider the code blocks below;

#### Using gray (It takes two arguments)

````html
<html>
  <body>
      <img id="img" src="photo.jpg" width="80" height="80">
      <canvas id="canvas" width="80" height="80"></canvas>
      <script src="./pathto/ZuckLib.js"></script>
      <script type="text/javascript">
          var filter = new FilterLib();
          var contents = filter.gray($$("img"), $$("canvas"));
          var upload = pushFile(contents, "./pathto/ZuckLib.php");
      </script>
  </body>
</html>
````


#### Using sepia (It takes two arguments)

````html
<html>
  <body>
      <img id="img" src="photo.jpg" width="80" height="80">
      <canvas id="canvas" width="80" height="80"></canvas>
      <script src="./pathto/ZuckLib.js"></script>
      <script type="text/javascript">
          var filter = new FilterLib();
          var contents = filter.sepia($$("img"), $$("canvas"));
          var upload = pushFile(contents, "./pathto/ZuckLib.php");
      </script>
  </body>
</html>
````
Having achieved the following code blocks, the pushFile() method returns the successfully uploaded (generated) file name, which could be utilized for further requests.

#### Using brightness(It takes three arguments);

````html
<html>
  <body>
      <img id="img" src="photo.jpg" width="80" height="80">
      <canvas id="canvas" width="80" height="80"></canvas>
      <script src="./pathto/ZuckLib.js"></script>
      <script type="text/javascript">
          var filter = new FilterLib();
          var contents = filter.brightness($$("img"), $$("canvas"), 50);
          var upload = pushFile(contents, "./pathto/ZuckLib.php");
      </script>
  </body>
</html>
````

#### Using contrast (It takes three arguments);

````html
<html>
  <body>
      <img id="img" src="photo.jpg" width="80" height="80">
      <canvas id="canvas" width="80" height="80"></canvas>
      <script src="./pathto/ZuckLib.js"></script>
      <script type="text/javascript">
          var filter = new FilterLib();
          var contents = filter.contrast($$("img"), $$("canvas"), 50);
          var upload = pushFile(contents, "./pathto/ZuckLib.php");
      </script>
  </body>
</html>
````

From the code above, you can see that the contrast() and brightness() methods have a third argument which represents the percentage brightness and ranges from 0 to 100 percent. Same applies to the third argument of the contrast() method;

## Support/Issues
Report any usage issues or make suggestions to +2348117093601 or elzucky@gmail.com
