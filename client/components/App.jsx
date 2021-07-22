import React from 'react';
import Overview from './OverviewComponent/Overview.jsx';
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  // hello is it me youre looking for
  render() {
    return (
      <div>
        <h1>THIS IS KNIFE DANCE!</h1>
        <Overview />

      </div>
    )
  }
}
export default App;