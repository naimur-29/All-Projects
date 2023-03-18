import { Typography, Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Typography variant={"h3"}>Buttons</Typography>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Button variant="outlined" href="/link">
          Link
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
