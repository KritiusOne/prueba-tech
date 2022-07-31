import './App.css';
import { NoticiasPreview } from './views/NoticiasPreview/NoticiasPreview.jsx';
import {Route} from 'wouter';
import {NoticiaView} from './views/NoticiaView/NoticiaView.jsx'
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
