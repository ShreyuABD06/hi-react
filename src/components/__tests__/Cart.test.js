import { act, fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/menuList.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
           return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load the restaurant menu component",async () =>{
    await act( async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
    ));
    const accordianHeader = screen.getByText("Recommended (14)")
    fireEvent.click(accordianHeader);
    const items = screen.getAllByTestId("foodItem");
    expect(items.length).toBe(14);

    const addButtons = screen.getAllByRole("button", {name:"Add +"})
    fireEvent.click(addButtons[0])
    expect(screen.getByText("Cart - 1")).toBeInTheDocument();
    fireEvent.click(addButtons[1])
    expect(screen.getByText("Cart - 2")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItem").length).toBe(16); //2 in cart 14 in menu
    const clearCart = screen.getByRole("button",{name:"Clear Cart"})
    fireEvent.click(clearCart);
    expect(screen.getAllByTestId("foodItem").length).toBe(14);
    expect(screen.getByText("Cart - 0")).toBeInTheDocument();
    expect(screen.getByText("Your Cart Is Empty. Please add items to the cart")).toBeInTheDocument();
})