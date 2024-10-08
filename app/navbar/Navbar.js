'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Flashcard SaaS
        </Typography>
        <SignedOut>
          <Button color="inherit" href="/sign-in">
            Login
          </Button>
          <Button color="inherit" href="/sign-up">
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <Button color="inherit" href="/" sx={{ mr: 4 }}>
            Home
          </Button>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
