import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex justify-around items-center p-5">
        <Link to="/" className="[&.active]:font-bold text-orange-500">
          Home
        </Link>
        <Link to="/celToFah" className="[&.active]:font-bold text-orange-500">
          Celcius to Fahrenheit
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
