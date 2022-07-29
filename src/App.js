import './App.css';
import { NoticiasPreview } from './components/NoticiasPreview/NoticiasPreview.jsx';
import {Route} from 'wouter';
import {NoticiaView} from './components/NoticiaView/NoticiaView.jsx'
function App() {
  return (
    <div className="App">
      <section>
        <Route path='/'
        component={NoticiasPreview}/>
        <Route path='/new/:objectID' component={NoticiaView}/>
      </section>
      
    </div>
  );
}

export default App;
