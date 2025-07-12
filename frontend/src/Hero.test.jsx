import React from "react";
import { render, screen } from '@testing-library/react';
import Hero from './landing_page/home/HeroSection';

//Hero suite
describe("Hero component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/homeHero.png");
    });
    test("renders signup button",()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button", { name: /Sign up for free/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});