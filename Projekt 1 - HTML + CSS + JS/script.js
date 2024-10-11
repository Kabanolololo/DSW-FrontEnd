//SKRYPT WYSWIETALANIE
const projects = document.getElementById('projects-cat');
const about = document.getElementById('about-me');
const courses = document.getElementById('courses');
const exp = document.getElementById('exp');

const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')

projects.addEventListener('click', () => {
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
});

about.addEventListener('click', () => {
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
    d.style.display = 'none';
});

courses.addEventListener('click', () => {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
    d.style.display = 'none';
});

exp.addEventListener('click', () => {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'block';
});

//SKRYPT CIEMNA STRONA
document.getElementById('moon').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #1e1e1e;
        color: white;
    }
    .dark-mode #navbar {
        background-color: #1e1e1e;
    }
    .dark-mode #welcome-section {
        background-color: #1f1f1f;
    }
    .dark-mode #welcome-section:hover {
        background-color: #6d6d6d;
    }
    .dark-mode #categories{
        background-color: #1e1e1e;
    }
    .dark-mode .block{
        background-color: #1e1e1e;
        color: white; 
    }
    .dark-mode #projects{
        background-color: #303030;
        color: white;
    }
    .dark-mode .project-tile {
        background-color: #1e1e1e;
        border-color: #444;
        color: white; 
    }
    .dark-mode footer {
        background-color: #1a1a1a;
    }
`;
document.head.appendChild(style);
