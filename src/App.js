import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

//WithoutJSX => React.createElement => ReactElement => JS Object => HTMLElement(render)
// const heading = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},//Single
// [React.createElement("h1", {},"This is h1"), React.createElement("h2", {},"This is react h2")]) //Multiple in an array
// ); //Object 
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);//React object is passed as argument to render as DOM object


//With JSX -> JSX -> React.createElement => ReactElement => JS Object => HTMLElement(render)
const jsxHeading = <h1 id="parent">Hey to JSX</h1>


//Component

// const Title = () =>(
//     <h1 className="head" tabIndex="5">
//         Hey I am a title
//     </h1>
// )

// const HeadingComponent = () =>(
//     <div id="container">
//         <Title/>
//         {Title()}
//         <Title></Title>
//     <h1 className="heading">Hey to React Component</h1>
//     </div>     
// )





//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING




const AppLayout = () =>
     (
     <div className="app">
        <Header/>
        <Body/>
    </div>
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


