import { Session } from 'express-session';

declare module 'express-session' {
  interface Session {
    user: string; // Assuming 'user' is a string
    // Add other custom properties as needed
  }
}
