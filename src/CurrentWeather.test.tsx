import { render, screen, fireEvent } from "@testing-library/react";
import { TimeAndLocation } from "src/components/TimeAndLocation";
import CurrentWeather from "./components/CurrentWeather";

jest.mock("src/components/TimeAndLocation", () => ({
    TimeAndLocation: () => <div data-testid="time-and-location">Time and Location</div>,
}));



