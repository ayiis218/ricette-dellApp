import React from 'react';

import NavBar from '../../components/atoms/Navbar';
import FormAddRecipe from '../../components/organisms/FormRecipe/FormAddRecipe';
import Footer from '../../components/Footer';

function App() {
   return (
      <>
         <NavBar />
         <FormAddRecipe />
         <Footer />
      </>
   );
}

export default App;
