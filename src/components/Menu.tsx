import { auth0 } from "@/lib/auth0"
import { AppBar, Button, IconButton, Typography, Box, Toolbar, Link } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export default async function Menu() {
  const session = await auth0.getSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon TCGP Trade 
          </Typography>
          {!session && <>
            <Button color="inherit">
              <Link href="/auth/login" color="inherit" underline="none">Log in</Link>
            </Button>
          </>}
          {session && <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccountCircleIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "8px" }}>
                {session.user.name}
              </Typography>
            </IconButton>
          </>}

        </Toolbar>
      </AppBar>
    </Box>
  )
}