import Counter from "./components/Counter";
import PageWrapper from "./components/PageWrapper";
import TodosList from "./components/TodosList";
import './style.css';


function App() {
  return (
    <PageWrapper>
      <Counter />
      <TodosList />
    </PageWrapper>
  );
}

export default App;
