import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";

export const MuiSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState<string[]>([]);
  console.log({ darkMode, settings });

  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  const handleSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (settings.includes(value)) {
      setSettings([...settings.filter((setting) => setting !== value)]);
    } else {
      setSettings([...settings, value]);
    }
  };

  return (
    <Box>
      <Box
        style={{
          backgroundColor: darkMode ? "#0003" : "#fff",
          padding: "10px 20px",
          transition: "all 0.25s",
        }}
      >
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch checked={darkMode} onChange={handleDarkModeChange} />
          }
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Settings</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Theme"
              value="theme"
              control={
                <Switch
                  checked={settings.includes("theme")}
                  onChange={handleSettingsChange}
                />
              }
            />
            <FormControlLabel
              label="Blur"
              value="blur"
              control={
                <Switch
                  checked={settings.includes("blur")}
                  onChange={handleSettingsChange}
                />
              }
            />
            <FormControlLabel
              label="Brightness"
              value="brightness"
              control={
                <Switch
                  checked={settings.includes("brightness")}
                  onChange={handleSettingsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
