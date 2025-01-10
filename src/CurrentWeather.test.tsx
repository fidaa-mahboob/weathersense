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

    test("renders the component with weather data", () => {
        render(<CurrentWeather currentWeatherData={mockCurrentWeatherData} setDataLoaded={mockSetDataLoaded} />);
    
        // Check weather main description
        expect(screen.getByText("Clear")).toBeInTheDocument();
    
        // Check temperature display
        expect(screen.getByText("25 °C")).toBeInTheDocument();
    
        // Check "Feels Like" temperature
        expect(screen.getByText("Feels Like:")).toBeInTheDocument();
        expect(screen.getByText("27 °C")).toBeInTheDocument();
    
        // Check "Humidity"
        expect(screen.getByText("Humidity:")).toBeInTheDocument();
        expect(screen.getByText("50 %")).toBeInTheDocument();
    
        // Check "Wind Speed"
        expect(screen.getByText("Wind Speed:")).toBeInTheDocument();
        expect(screen.getByText("5 m/s")).toBeInTheDocument();
    
        // Check "High" and "Low" temperatures
        expect(screen.getByText("High:")).toBeInTheDocument();
        expect(screen.getByText("28 °C")).toBeInTheDocument();
        expect(screen.getByText("Low:")).toBeInTheDocument();
        expect(screen.getByText("20 °C")).toBeInTheDocument();
      });
    
      test("calls reset function when home button is clicked", () => {
        render(<CurrentWeather currentWeatherData={mockCurrentWeatherData} setDataLoaded={mockSetDataLoaded} />);
    
        // Click on the home button
        const homeButton = screen.getByRole("link");
        fireEvent.click(homeButton);
    
        expect(mockSetDataLoaded).toHaveBeenCalledWith(false);
        expect(mockSetDataLoaded).toHaveBeenCalledTimes(1);
      });
    
      test("renders the weather icon correctly", () => {
        render(<CurrentWeather currentWeatherData={mockCurrentWeatherData} setDataLoaded={mockSetDataLoaded} />);
    
        // Check the weather icon
        const weatherIcon = screen.getByAltText("weather icon");
        expect(weatherIcon).toHaveAttribute("src", "https://openweathermap.org/img/wn/01d@2x.png");
      });
    
      test("renders TimeAndLocation component", () => {
        render(<CurrentWeather currentWeatherData={mockCurrentWeatherData} setDataLoaded={mockSetDataLoaded} />);
    
        // Check the TimeAndLocation component
        expect(screen.getByTestId("time-and-location")).toBeInTheDocument();
      });    
});



