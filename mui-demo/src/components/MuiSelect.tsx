import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleCountryChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(_event.target.value as string);
  };

  const handleCountriesChange = (
    _event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = _event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      width="250px"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleCountryChange}
        fullWidth
      >
        <MenuItem value="bd">Bangladesh</MenuItem>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="jp">Japan</MenuItem>
        <MenuItem value="kr">Korea</MenuItem>
      </TextField>

      {/* Multi select option */}
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleCountriesChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="bd">Bangladesh</MenuItem>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="jp">Japan</MenuItem>
        <MenuItem value="kr">Korea</MenuItem>
      </TextField>
    </Box>
  );
};
