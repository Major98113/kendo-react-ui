import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Filter, Operators, TextFilter } from '@progress/kendo-react-data-tools';

const  featuresResponse = {
  data: [
    { id: 1, name: 'NotificationsMute' },
    { id: 2, name: 'Share' },
    { id: 3, name: 'ShareFeed' },
    { id: 4, name: 'Onboarding' },
    { id: 5, name: 'ReportErrors' }
  ], 
  total: 5
};

const App = () => {
  const [features, setFeatures] = React.useState([]);
  const [filter, setFilter] = React.useState({
    logic: 'and',
    filters: []
  });
  const onFilterChange = event => {
    setFilter(event.filter);
  };

  React.useEffect( async () => {
    const featuresFields = featuresResponse.data.map(({name}) => ({
      name,
      label: name,
      filter: TextFilter,
      operators: Operators.numeric
    }));
    setFeatures(featuresFields);
  }, []);

  return (
    <React.Fragment>
      <Filter value={filter} onChange={onFilterChange} fields={features} />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));