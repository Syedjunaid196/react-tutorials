//HOW TO CREATE A HTML TAG USING REACT
const heading = React.createElement("h1", { id: "heading", color: "red" }, "Hello World From The World Of JavaScript!");
// this heading is basically a ReactElement which is object and becomes an element which browser understands..
// if we log this heading it will give us a react heading..
//react.createElement creates js object
console.log(heading);
// and from console we get props-- attributes and the third arugument of 
//ReactCreateElement("type", {Props}, "children")
// and the third argument of React.createElement ié what to put inside the tag -- is known as children..
// in simple way attributes come under props..
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
// renders meaning
// react Element which is basically an object converts itself into html which browser understands
// that is how we create element using react..
// root.render replaces the existing tag , not similar to append




// now how to create nested elements using div
//like <div id= "parent">
//                      <div id= "child">
//                               <h1 id= "heading1"></h1>
//                      </div>
//
//    </div>
// here is how 

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        // now if i've to make siblings we wrap the third argument into the array
        [
            React.createElement("h1", { id: "heading" }, "Hello I'm h1 tag"),
            React.createElement("h2", { id: "heading2" }, "Hello I'm h2 tag"),
            React.createElement("h3", { id: 'heading3' }, "Hello i'm h3 tag")

        ]
    )
);
// this is very hard so we 've jsx to use insted of creating this mess


root.render(parent);