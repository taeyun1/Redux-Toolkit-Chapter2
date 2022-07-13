import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";
// import ShunkButton from "./features/shunk/ShunkButton";

function App() {
  return (
    <div className="App">
      {/* <ShunkButton /> */}
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
