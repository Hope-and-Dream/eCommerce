import { Route, Routes } from 'react-router-dom';
import { SignIn, Main, EmptyPage } from './pages';
import { Registration } from './pages/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
