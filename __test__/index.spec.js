/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import { screen, fireEvent, render } from "@testing-library/react";
import HomeSearchBar from "../src/HomeSearchBar";

describe("Test driven development starts here.",()=>{
    describe("search products using search bar at homee page",()=>{
        test("search products",()=>{
            let handleproduct = jest.fn();
            render(<HomeSearchBar handleproduct={handleproduct}/>);
            let srchBar = screen.getByTestId("home-search-bar");
            expect(srchBar).toBeInTheDocument();

            userEvent.type(srchBar, /ear-phone/i);

            let bttn = screen.getByTestId("click here");
            expect(bttn).toBeInTheDocument();
            userEvent.click(bttn);

            let product = screen.getByTestId("earPhone");
            expect(product).toBeInTheDocument();

        })
            // beforeEach(async () => {
            //     let handleproduct = jest.fn();
            //     <HomeSearchBar handleProducts={handleproduct}/>
            //     let srchBar1 = screen.getByTestId("home-search-bar");
            //     await userEvent.type(srchBar1,/ear-phone/i);
            //     userEvent.click(screen.getByTestId("click here"));
            // })
            // test("handleproduct called with textbox value",()=>{
            //     expect(handleproduct).toHaveBeenCalledWith('ear-phone');
            // })
    })
})