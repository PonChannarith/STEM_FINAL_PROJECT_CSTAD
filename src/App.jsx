import React from 'react';
import './App.css';
import Background from './components/background/Background';
import Footer from './page/footer/Footer';
import BookCard from './components/bookCard/BookCard';
import LessonHomeCard from './page/lessonHomeCard/LessonHomeCard';
import BlogHomeCard from './page/blogHomeCard/BlogHomeCard';

const App = () => {
  return (
    <div>
      <Background />
      <BookCard />
      <LessonHomeCard />
      <BlogHomeCard />
     <Footer />
    </div>
  );
}
export default App;
