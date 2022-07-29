import Container from "react-bootstrap/Container";
import Eldens from '../eldens/components/Eldens';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndividualElden from '../eldens/components/IndividualElden';
import AuthLayout from '../auth/components/AuthLayout';
import EldenLayout from '../eldens/components/EldenLayout';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='login' element={<AuthLayout />} />
          <Route path="/" element={<EldenLayout />}>
            <Route index element={<NotFound />} />
            <Route path='elden' element={<Eldens />} />
            <Route path='elden/:id' element={<IndividualElden />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
