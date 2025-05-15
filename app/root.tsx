import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>An unexpected error occurred.</p>
    </div>
  );
}
