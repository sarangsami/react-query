import Router from "routes";
import Providers from "./providers";

const App: React.FC = () => {
  return (
    <Providers>
      <Router/>
    </Providers>
  );
};
export default App;
