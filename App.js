import './App.css';
import Header from './Header';
import ConditionalForm from './ConditionalForm';

const appStyle = {
  marginLeft: "20px", // Adjust the margin-left as needed
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <Header title="New Post" />
      <ConditionalForm />
    </div>
  );
}

export default App;
