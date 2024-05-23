import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Multiple cases using describe",()=>{

    beforeAll(()=>{
        //console.log("Before All")
    });

    beforeEach(()=>{
        //console.log("Before Each")
    });

    afterAll(()=>{
        //console.log("After All")
    });

    afterEach(()=>{
        //console.log("After Each")
    });

    test('Should load contact us component',()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
    });
    
    test('Should load button contact us component',()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        //const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument()
    })
    
})

//it or test both are same
it('Should load input name contact us component',()=>{
    render(<Contact/>);

    const placeholder = screen.getByPlaceholderText("name");
    //const button = screen.getByText("Submit");
    expect(placeholder).toBeInTheDocument()
})

test('Should load all input in contact us component',()=>{
    render(<Contact/>);

    const inputs = screen.getAllByRole("textbox");
    //const button = screen.getByText("Submit");
   // console.log(inputs.length);
    expect(inputs.length).toBe(2);
})
