import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Post from './componets/Post';
import NewPost from './componets/NewPost';
import PostList from './componets/PostList';
import MainHeader from './componets/MainHeader';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }

  function hideModalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <div>
          <h1>Welcome to my world</h1>
          <PostList isPosting={modalVisible} hideModal={hideModalHandler} />
        </div>
      </main>
    </>
  );
}

export default App;
