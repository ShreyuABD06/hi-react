import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("It should render header component with login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>        
    )
    const loginButton = screen.getByRole("button");

     expect(loginButton).toBeInTheDocument();   
})

it("It should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>        
    )
    const loginButton = screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"logout"});

     expect(logoutButton).toBeInTheDocument();   
})