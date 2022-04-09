import { Route, Routes } from "react-router-dom";

import ErrorPage from "pages/404";
import Details from "pages/Details";
import Posts from "pages/Posts";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/detail/:id" element={<Details />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
