NPM
npm --doesn't stand for node pakage manager
nipolean pizza maker 
it is everything but not node pakage manager 

npm manages packages 
behind the seens it manages packages 

npm is the  repository for all packages, any package we use in the our project we install it via npm
all the libraries and ... come from npm

HOW TO ADD JSON FILE TO THE PROJECT 
NPM INIT AND THEN FOLLOW ON INSTRUCTIONS....
PACKAGE.JSON IS THE CONFIGURATION FOR NPM....


SO WHY DO WE NEED THIS PACKAGE.JSON FILE

BUNDLER 

NOW WE 'VE NPM WE CAN INSTALL ANY DEPENDANCY FOR E.G
NPM INSTALL -D PARCE
// (-D--MEANS)
THERE ARE TWO TYPE OF DEPENDENCIES WHICH AN APP HAVE..
1) DEV DEPENDENCIES.--GENERALLY REQUIRED IN DEVELOPMENT PHASE..WHEN WE ARE DEVELOPING AN APP
2) NORMAL DEPENDENCIES.---USED IN PRODUCTION ALSO..

parcel--
it is a beast it will do a lot of things in our app
caret symbol in the parcel version in the package.json means that when ever the parcel update is available it will update it automatically..

now we got package-lock.json 

WHY TWO FILES OF PACKAGE.JSON (PACKAGE.JSON AND PACKAGE-LOCK.JSON)

1) PACKAGE.JSON --IT KEEPS A TRACK OF WHAT VERSION OF PACKAGE IS INSTALLED IN SYSTEM, AND IF THERE IS A CARET IN THE VERSION IT WILL UPGRADE IF ANY MINOR UPGRADE IS AVAILABLE..
2)PACKAGE-LOCK.JSON -- IT KEEPS A TRACK OF EXACT VERSION WHICH IS BEING INSTALLED IN.

we get another file by the name of NODE_MODULES , WHAT IS IT ?

IT IS KIND OF DATABASE WHICH CONTAINS THE ACTUAL DATA OF THAT DEPENDANCY OR PACKAGE THAT A PROJECT NEEDS
ALL PACKAGES EXIST IN THE NODE MODULES

WE INSTALLED PARCEL BECAUSE WE NEED IT AND PARCEL INSTALLS ITS OWN DEPENDENCIES WHICH PARCEL NEEDS AND DEPENDENCIES HAVE THERE OWN AND SO ON....and this is known as transitive dependencies

every dependency / every package has its own package.json.

it is not required to push node module to gitHub.
when we have package.json and package-lock.json we can generate whole node module files by just a cmd npm install


now to open server we have a command npx parcel index.html 
meaning
npx means excueting an existing package which is parcel 

using react via cdn links is not a good pratice we should install react via npm --- npm install react --- as a normal dependancy not as a 
dev dependancy.

while buliding our app we need to install react-DOM
 so by installing react and react0dom we no longer need the cdn links..

 now in order to use react in our file we just import react in our file from react which is inour node modules


if we change or add any tag in our editor it will reflect in the browser with in no time , and this is due to parcel this is why parcel is known as beast....


Parcel
-creates dev bulid
- creates a server
-HMR-- (hot module replacement --refreshes page)
-parcel use file watching alghorithm which is build in c++
-faster builds by caching.
-image optmazition 
-minification of file also
-file bundling
-compress file
-consistant hashing-
-code splitting- 
- differential bundling- for smoothness in old browsers
-diagonistic
-error handling
-parcel also gives us a way to host our app over https 
-tree shaking -- parcel will remove unused code 
-diff dev and production bundles --as prod build takes more time.
NOW HOW TO CREATE A PRODUCTION BUILD
npx parcel build index.html (by just adding build)
it will give an error in order to remove that error we just need to remove this line in package.json "main": "App.js",
it will give one html file one js file and one css file, suppose if we have 20 to 30 files it will compress everything and minify everything 
to these three files
now these three files will contain all the code we write, and these three files are the production ready code of our app
this production build is th highly optimized build which can push onto production and serve this app to the users , it will be fast , it will be performant , 
it will be optimized 
dist and parcel cache are auto generated so we don't need them to push into github, because the cmds that we wrote while building our app will also be runfrom the client site
local ----- to-- git------ server





dist folder --when we write index.html it generates a development build of the project and put it into the dist folder.
and when we refresh our page it uses parcel caching folder to and dist folder to uodate it using hmr

-----visit parcel.org-----

how to make our app compatible for old browsers--
for that we will use browserslist node module and add array of browsers list in node module
go to browserslist in the chrome and use versions
simply write last two versions
-






