import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center items-center m-20">
      <h3>Testing random bullshits out here..</h3>
    </div>
  );
}
