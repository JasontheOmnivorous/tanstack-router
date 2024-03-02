import { createLazyFileRoute } from "@tanstack/react-router";
import CelciusToFahrenheit from "../components/CelciusToFahrenheit";

export const Route = createLazyFileRoute("/celToFah")({
  component: CelToFah,
});

function CelToFah() {
  return (
    <div className="p-2">
      <CelciusToFahrenheit />
    </div>
  );
}
