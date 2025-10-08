import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from "@mui/material";

const drawerWidth = 200;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MedViewer
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body1">👤 Profile</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {["Home", "Studies", "Viewer", "Analysis"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={RouterLink} to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${drawerWidth}px`,
          marginTop: "64px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

