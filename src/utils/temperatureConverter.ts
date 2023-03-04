type TemperatureConverterProps = {
    temperature: string;
};

export const temperatureConverter = (
    temperature: string,
    unit: "Celsius" | "Fahrenheit"
) => {
    return unit === "Celsius"
        ? (parseInt(temperature) * 9) / 5 + 32
        : parseInt(temperature) - (32 * 5) / 9;
};
