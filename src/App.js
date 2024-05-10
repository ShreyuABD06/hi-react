import React, { lazy,Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';

import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
//import Grocery from './components/Grocery';

//WithoutJSX => React.createElement => ReactElement => JS Object => HTMLElement(render)
// const heading = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},//Single
// [React.createElement("h1", {},"This is h1"), React.createElement("h2", {},"This is react h2")]) //Multiple in an array
// ); //Object 
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);//React object is passed as argument to render as DOM object


//With JSX -> JSX -> React.createElement => ReactElement => JS Object => HTMLElement(render)
//const jsxHeading = <h1 id="parent">Hey to JSX</h1>


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
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>
     {

        const [userName,setUserName] = useState()

        useEffect(()=>{
            const data ={
                name:"Shreyas C"
            }
            setUserName(data.name)
        },[])

        return(
            <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className="app box-border">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
            </Provider>
        )
     
    }

const appRouter = createBrowserRouter([
    { 
        path:"/", 
        element:<AppLayout/>,
        children:[
            { 
                path:"/", 
                element:<Body/>
            }
            ,
            { 
                path:"/about", 
                element:<About/>
            }
            ,
            { 
                path:"/contact", 
                element:<Contact/>
            }
            ,
            { 
                path:"/grocery", 
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
            ,
            { 
                path:"/restaurants/:resId", 
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);


