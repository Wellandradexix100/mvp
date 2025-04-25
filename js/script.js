// Dados simulados (substituiria o banco de dados)
const booksData = [
  {
    id: 1,
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    category: "autoajuda",
    price: 49.9,
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_925771-MLU50709867127_072022-O.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Mindset: A Nova Psicologia do Sucesso",
    author: "Carol S. Dweck",
    category: "autoajuda",
    price: 39.9,
    cover: "https://m.media-amazon.com/images/I/61FvEsXjZ8L._SY342_.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Rápido e Devagar",
    author: "Daniel Kahneman",
    category: "negocios",
    price: 59.9,
    cover: "https://m.media-amazon.com/images/I/319zc862DSL._SY445_SX342_.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "O Homem Mais Rico da Babilônia",
    author: "George S. Clason",
    category: "negocios",
    price: 29.9,
    cover: "https://m.media-amazon.com/images/I/41Xc4wyyMIL._SY445_SX342_.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "A Sutil Arte de Ligar o F*da-se",
    author: "Mark Manson",
    category: "autoajuda",
    price: 34.9,
    cover:
      "https://img.travessa.com.br/livro/GR/7f/7ffe9d6a-be75-4725-b357-d3b44ed6b399.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    category: "ficcao",
    price: 45.9,
    cover: "https://m.media-amazon.com/images/I/51VXYaKO-sL._SY445_SX342_.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    category: "ficcao",
    price: 32.9,
    cover: "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg",
    featured: true,
  },
  {
    id: 8,
    title: "O Milagre da Manhã",
    author: "Hal Elrod",
    category: "autoajuda",
    price: 37.9,
    cover: "https://m.media-amazon.com/images/I/512zQ6qXkML._SY342_.jpg",
    featured: false,
  },
];

const authorsData = [
  {
    id: 1,
    name: "Charles Duhigg",
    photo:
      "https://napratica.org.br/wp-content/uploads/2025/03/Charles_Duhigg_Na_Pratica.jpg",
    booksCount: 3,
  },
  {
    id: 2,
    name: "Carol S. Dweck",
    photo:
      "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/85582d553035da22504c315ba5ec7ed727f16354_2880x1620.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640",
    booksCount: 5,
  },
  {
    id: 3,
    name: "Daniel Kahneman",
    photo:
      "data:image/webp;base64,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",
    booksCount: 7,
  },
  {
    id: 4,
    name: "George S. Clason",
    photo:
      "https://d1a9qnv764bsoo.cloudfront.net/stores/003/776/678/rte/george-s.clason.jpg",
    booksCount: 4,
  },
  {
    id: 5,
    name: "Mark Manson",
    photo:
      "https://ogimg.infoglobo.com.br/cultura/23680569-7cc-ac1/FT1086A/76165441_mark-manson-autor-de-a-sutil-arte-de-ligar-o-fda-se.jpg",
    booksCount: 3,
  },
  {
    id: 6,
    name: "George Orwell",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRUI5KUGrG2Z_aK7jfp1LHtpCIolRROagnA&s",
    booksCount: 10,
  },
];

// Carrinho de compras
let cart = [];

// Função para renderizar livros em destaque
function renderFeaturedBooks() {
  const featuredBooksContainer = document.getElementById("featured-books");
  const featuredBooks = booksData.filter((book) => book.featured);

  featuredBooksContainer.innerHTML = featuredBooks
    .map(
      (book) => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-cover" style="background-image: url('${
              book.cover
            }')"></div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">R$ ${book.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${
                  book.id
                }">Adicionar ao Carrinho</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Função para renderizar todos os livros
function renderAllBooks(filter = "all", sort = "recent") {
  const allBooksContainer = document.getElementById("all-books");
  let booksToShow = [...booksData];

  // Filtrar por categoria
  if (filter !== "all") {
    booksToShow = booksToShow.filter((book) => book.category === filter);
  }

  // Ordenar
  switch (sort) {
    case "popular":
      // Simulando popularidade (em um sistema real viria do banco de dados)
      booksToShow.sort((a, b) =>
        a.featured === b.featured ? 0 : a.featured ? -1 : 1
      );
      break;
    case "price-asc":
      booksToShow.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      booksToShow.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  allBooksContainer.innerHTML = booksToShow
    .map(
      (book) => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-cover" style="background-image: url('${
              book.cover
            }')"></div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">R$ ${book.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${
                  book.id
                }">Adicionar ao Carrinho</button>
            </div>
        </div>
    `
    )
    .join("");
}

// Função para renderizar autores
function renderAuthors() {
  const authorsContainer = document.querySelector(".authors-grid");

  authorsContainer.innerHTML = authorsData
    .map(
      (author) => `
        <div class="author-card" data-id="${author.id}">
            <div class="author-photo" style="background-image: url('${author.photo}')"></div>
            <h3 class="author-name">${author.name}</h3>
            <p class="author-books">${author.booksCount} livros publicados</p>
        </div>
    `
    )
    .join("");
}

// Função para atualizar contador do carrinho
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".cart-count").textContent = cartCount;
}

// Função para adicionar item ao carrinho
function addToCart(bookId) {
  const book = booksData.find((b) => b.id === bookId);

  if (!book) return;

  const existingItem = cart.find((item) => item.id === bookId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1,
    });
  }

  updateCartCount();
  showAlert("Livro adicionado ao carrinho!");
}

// Função para mostrar alerta
function showAlert(message) {
  const alert = document.createElement("div");
  alert.className = "alert";
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.classList.add("fade-out");
    setTimeout(() => alert.remove(), 500);
  }, 3000);
}

// Função para inicializar o site
function init() {
  renderFeaturedBooks();
  renderAllBooks();
  renderAuthors();
  updateCartCount();

  // Event listeners para filtros
  document.getElementById("category-filter").addEventListener("change", (e) => {
    const sortBy = document.getElementById("sort-by").value;
    renderAllBooks(e.target.value, sortBy);
  });

  document.getElementById("sort-by").addEventListener("change", (e) => {
    const category = document.getElementById("category-filter").value;
    renderAllBooks(category, e.target.value);
  });

  // Event delegation para botões "Adicionar ao Carrinho"
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const bookId = parseInt(e.target.getAttribute("data-id"));
      addToCart(bookId);
    }
  });

  // Event listener para o formulário de contato
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    showAlert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    e.target.reset();
  });

  // Event listener para o ícone do carrinho (simulação)
  document.querySelector(".cart").addEventListener("click", () => {
    if (cart.length === 0) {
      showAlert("Seu carrinho está vazio.");
    } else {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      showAlert(
        `Carrinho: ${totalItems} itens - Total: R$ ${totalPrice.toFixed(2)}`
      );
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
