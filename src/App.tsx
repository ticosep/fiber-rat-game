import { Canvas } from "@react-three/fiber";
import { CanvasWrapper } from "./components";
import { Level1 } from "./levels";

function App() {
  return (
    <CanvasWrapper>
      <Canvas>
        <ambientLight />
        <Level1 />
      </Canvas>
    </CanvasWrapper>
  );
}

export default App;
