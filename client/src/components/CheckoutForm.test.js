import React from "react";
import { render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    //ARRANGE
    render(<CheckoutForm />)
    //ACT
    const nameInput =screen.getByLabelText(/first name/i)
    const last =screen.getByLabelText(/last name/i)
    const address =screen.getByLabelText(/address/i)
    const city =screen.getByLabelText(/city/i)
    const state =screen.getByLabelText(/state/i)
    const zip =screen.getByLabelText(/zip/i)
    const button = screen.getByRole('button', {name: /checkout/i})

        userEvent.type(nameInput, 'Michelle')
        userEvent.type(last, 'Chen')
        userEvent.type(address,'ellington')
        userEvent.type(city, 'northville')
        userEvent.type(state,'MI')
        userEvent.type(zip,'24837')
        userEvent.click(button)

    const newName = screen.findByText(/Michelle/i)
    expect(newName).toMatchObject(/Michelle/i)
})