import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import CrearRecipe from './components/recipes/CrearRecipe';
import RecipeDetail from './components/RecipeDetail'; 
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar />
          <Switch>
            <Route exact path ='/' component = {LandingPage}/>
            <Route path = '/home' component={Home}/>
             <Route path='/recipes' component={CrearRecipe}/> 
             <Route path='/recipedetail/:id' component={RecipeDetail}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
