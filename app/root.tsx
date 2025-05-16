import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./app.css";

export default function Layout() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>An unexpected error occurred.</p>
    </div>
  );
}
