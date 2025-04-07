import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow border border-blue-500">
        <Main />
      </main>
      <Footer className="border border-red-500" />
    </div>
  );
}

export default App;
