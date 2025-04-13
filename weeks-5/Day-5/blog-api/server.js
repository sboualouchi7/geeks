const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'Introduction to RESTful APIs', content: 'REST stands for Representational State Transfer...' },
  { id: 2, title: 'Working with Express.js', content: 'Express is a minimal and flexible Node.js web application framework...' },
  { id: 3, title: 'CRUD Operations', content: 'CRUD stands for Create, Read, Update, and Delete...' }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  res.json(post);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  
  const id = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
  
  const newPost = {
    id,
    title,
    content
  };
  
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  
  if (!title && !content) {
    return res.status(400).json({ message: 'Title or content is required' });
  }
  
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content
  };
  
  res.json(posts[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  const deletedPost = posts[postIndex];
  posts.splice(postIndex, 1);
  
  res.json({ message: 'Post deleted successfully', deletedPost });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});