import {  act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_RESTAURANTS from "../mocks/restaurantList.json"
import { BrowserRouter } from "react-router-dom"
//import { act } from "react"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_RESTAURANTS);
        }
    })
})

it("Should render body component with search button",async ()=>{
    await act(async () => render(   
        <BrowserRouter>
        <Body/>
        </BrowserRouter> 
    
))
    //use act in case of async methods or state changes
    const search = screen.getByRole("button",{name:"Search"});

    expect(search).toBeInTheDocument() 

})

it("Should render body component with search button",async ()=>{
    await act(async () => render(   
        <BrowserRouter>
        <Body/>
        </BrowserRouter> 
    
))

const cardsBeforeSearch = screen.getAllByTestId("resCard");
expect(cardsBeforeSearch.length).toBe(20)
    //use act in case of async methods or state changes
    const search = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"pizza"}});
    fireEvent.click(search);
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(5) 


})

it("Should render top rated restaurants", async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter> 
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    const filterButton = screen.getByRole("button",{name : "Top Rated Restaurants"});
    fireEvent.click(filterButton);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(9)
})