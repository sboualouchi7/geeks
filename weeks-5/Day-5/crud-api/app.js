const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log(`Successfully retrieved ${posts.length} posts from JSONPlaceholder API`);
    res.json(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    res.status(500).json({ message: 'Failed to fetch posts from external API' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CRUD API with Axios' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});