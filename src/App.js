import { DataProvider } from './context/DataProvider';
import { NoticiasPreview } from './views/NoticiasPreview/NoticiasPreview.jsx';
import { Route } from 'wouter';
import { NoticiaView } from './views/NoticiaView/NoticiaView.jsx'

import './App.css';
function App() {

  return (
    <DataProvider value={{
      name: 'esto es sin provider',
      provider: false
    }}>
      <Route path='/' component={NoticiasPreview} />

      <Route path='/new/:objectID' component={NoticiaView} />
    </DataProvider>
  );
}

export default App;
