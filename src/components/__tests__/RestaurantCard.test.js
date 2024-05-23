import { render, screen } from "@testing-library/react"
import RestaurantCard,{withPromotedLabel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render restaurant Card with props data", ()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})

//For higher order component
it("Should render restaurant Card with promoted label", ()=>{    
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData = {MOCK_DATA}/>);
    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})