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

describe("CurrentWeather Component", () => {
    const mockSetDataLoaded = jest.fn();
  
    const mockCurrentWeatherData = {
      weather: [{ main: "Clear", icon: "01d" }],
      main: {
        temp: 25.5,
        feels_like: 27.3,
        humidity: 50,
        temp_max: 28.1,
        temp_min: 20.4,
      },
      wind: {
        speed: 5.2,
      },
    };

    afterEach(() => {
        jest.clearAllMocks();
    });
    
});



