import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Heading</Typography>
      <Typography variant="h2">Heading</Typography>
      <Typography variant="h3">Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        Heading
      </Typography>
      <Typography variant="h5">Heading</Typography>
      <Typography variant="h6">Heading</Typography>

      <Typography variant="subtitle1">Heading</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Heading
      </Typography>

      {/* <Typography variant="body1"> */}
      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        ratione, aspernatur quis doloribus facilis quod laborum, minus autem
        atque hic eius excepturi non reiciendis ad dolorem saepe. Ab, blanditiis
        repudiandae.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet,
        beatae ex, possimus dolorum dolor a debitis consequatur deserunt hic
        atque quod porro autem totam voluptatibus illum veritatis, ut at?
      </Typography>
    </div>
  );
};
