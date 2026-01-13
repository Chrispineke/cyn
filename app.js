let posts = JSON.parse(localStorage.getItem("posts")) || [];

const postsContainer = document.getElementById("posts");
const searchInput = document.getElementById("search");
const themeBtn = document.getElementById("toggleTheme");

// Render Posts
function renderPosts(filter = "") {
    if (!postsContainer) return;

    postsContainer.innerHTML = "";
    posts
        .filter(p => p.title.toLowerCase().includes(filter))
        .forEach(post => {
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `
                <h2>${post.title}</h2>
                <small>${post.category} • ${post.date}</small>
                <p>${post.content.substring(0, 150)}...</p>
            `;
            postsContainer.appendChild(div);
        });
}

// Search
if (searchInput) {
    searchInput.addEventListener("input", e => {
        renderPosts(e.target.value.toLowerCase());
    });
}

// Dark Mode
if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle("dark");
    };
}

// Create Post
const form = document.getElementById("postForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const post = {
            title: title.value,
            category: category.value,
            content: content.value,
            date: new Date().toLocaleDateString()
        };
        posts.unshift(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = "index.html";
    });
}

renderPosts();