import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Homepage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBookPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/*<Homepage/>*/}
      <SearchBooksPage/>
      <Footer/>
    </div>
  );
}


