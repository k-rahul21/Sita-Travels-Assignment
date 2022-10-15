import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const dummyPosts = [
    {
      id: 1,
      title: "dp",
      caption: "jhdfuhas",
    },
    {
      id: 2,
      title: "picture",
      caption: "dfhuias",
    },
  ];

  return (
    <div className="App">
      <section>
        <button>Fetch Posts</button>
      </section>
      <section>
        <PostsList posts={dummyPosts} />
      </section>
    </div>
  );
}

export default App;
