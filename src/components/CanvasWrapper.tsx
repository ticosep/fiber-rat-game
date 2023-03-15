import { ReactNode } from "react";

type CanvasWrapperProps = {
  children: ReactNode;
};

export function CanvasWrapper({ children }: CanvasWrapperProps) {
  return <div style={{ width: "100vw", height: "100vh" }}>{children}</div>;
}
