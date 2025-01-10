import { render, screen, fireEvent } from "@testing-library/react";
import { TimeAndLocation } from "src/components/TimeAndLocation";
import CurrentWeather from "./components/CurrentWeather";

jest.mock("src/components/TimeAndLocation", () => ({
    TimeAndLocation: () => <div data-testid="time-and-location">Time and Location</div>,
}));

jest.mock("@iconscout/react-unicons", () => ({
    UilTemperature: () => <span data-testid="uil-temperature" />,
    UilTear: () => <span data-testid="uil-tear" />,
    UilWind: () => <span data-testid="uil-wind" />,
    UilArrowUp: () => <span data-testid="uil-arrow-up" />,
    UilArrowDown: () => <span data-testid="uil-arrow-down" />,
  }));



