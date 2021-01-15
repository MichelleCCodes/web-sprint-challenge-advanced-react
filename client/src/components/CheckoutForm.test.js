import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    //ARRANGE
    // const first =screen.getByLabelText(/first name/i)
    // const last =screen.getByLabelText(/last name/i)
    // const address =screen.getByLabelText(/address/i)
    // const city =screen.getByLabelText(/city/i)
    // const state =screen.getByLabelText(/state/i)
    // const zip =screen.getByLabelText(/zip/i)
    // const button = screen.getByRole('button', {name: /checkout/i})
});
