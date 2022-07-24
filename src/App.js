import './App.css';
import {
  useQuery,
} from '@tanstack/react-query'
import { fetchRandomApis } from './apis';

function App() {
  const { data: apis, isLoading, isError, refetch } = useQuery(['apis'], fetchRandomApis);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div className="App">
      <div className="display-box">
        <h1>API DULETTE!</h1>

        <button
          className="btn-gen"
          onClick={() => refetch()}
        >
          Generate your API Combo!
        </button>

        <div className='api-box'>
          {apis.map(api => (
            <a href={api.Link} target="blank" className='api-dis'>{api.API}</a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
