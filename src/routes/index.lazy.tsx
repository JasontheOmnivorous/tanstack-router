import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center items-center m-20">
      <App />
    </div>
  );
}
