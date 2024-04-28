// scripts.js

// Fetch blog posts dynamically and add them to the blog section
document.addEventListener('DOMContentLoaded', function() {
    fetch('blogPosts.json')
        .then(response => response.json())
        .then(data => {
            const blogSection = document.getElementById('blog');
            data.posts.forEach(post => {
                const blogPost = document.createElement('article');
                blogPost.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                `;
                blogSection.appendChild(blogPost);
            });
        });
});
