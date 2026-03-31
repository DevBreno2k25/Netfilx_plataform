/* ================================================================
   DADOS DO CATÁLOGO - Netflix Clone
   Define catálogos personalizados para cada perfil
   Cada perfil tem suas próprias categorias e filmes/séries
   ================================================================ */

/* ====================== OBJETO COM TODOS OS CATÁLOGOS ===============
   Chave = nome do perfil
   Valor = array de categorias personalizadas
   ============================================================== */
export const catalogosPorPerfil = {
    /* ====================== CATÁLOGO DA ANA ===========================
       Foco em dramas e romances com filmes reais
       ============================================================== */
    "Ana": [
        {
            title: "Romances Inesquecíveis",
            items: [
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-nBi9umdJ6A2Hy6QdXiiqYgn7xySX1mxFw&s",
                    top10: true,
                    badge: "Clássico",
                    badgeColor: "red",
                    progress: 100,
                    youtube: "https://youtu.be/IH6_CA_ocqY"
                },
                {
                    img: "https://m.media-amazon.com/images/I/81zHy+InA5L._AC_UF894,1000_QL80_.jpg",
                    top10: true,
                    progress: 60,
                    youtube: "https://youtu.be/BjJcYdEOI0k",
                },
                {
                    img: "https://i5.walmartimages.com/seo/La-La-Land-Movie-Poster-Poster-Print-24-x-36_20f02811-01b4-4aea-9bb2-a79942bd2642_1.856c035d66f8fd216f6d933259bc3dfb.jpeg",
                    badge: "Premiado",
                    badgeColor: "red",
                    youtube: "https://youtu.be/0pdqf4P9MB8"
                },
                {
                    img: "https://upload.wikimedia.org/wikipedia/pt/d/da/Before_Sunrise_poster.jpg",
                    top10: true,
                    progress: 0,
                    youtube: "https://youtu.be/6MUcuqbGTxc"
                }
            ]
        },
        {
            title: "Dramas Impactantes",
            items: [
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzp_SzI_E9QwsO832PgdbBOtf9JJGZGp9JQ&s",
                    progress: 45,
                    youtube: "https://youtu.be/kJ39qXjKLWs"
                },
                {
                    img: "https://m.media-amazon.com/images/I/61QFAKXbb5L._AC_UF894,1000_QL80_.jpg",
                    badge: "Emocionante",
                    badgeColor: "red",
                    youtube: "https://youtu.be/z02Ie8wKKRg"
                },
                {
                    img: "https://m.media-amazon.com/images/I/71+gLki+J8L._AC_UF894,1000_QL80_.jpg",
                    progress: 30,
                    youtube: "https://youtu.be/Ki4haFrqSrw"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyDSu7F-DrBOho8PL9VbI0KXkjA7otM4Hng&s",
                    top10: true,
                    youtube: "https://youtu.be/gsVoD0pTge0"
                }
            ]
        }
    ],

    /* ====================== CATÁLOGO DO RAUL ==========================
       Foco em ação e thrillers com filmes reais
       ============================================================== */
    "Raul": [
        {
            title: "Ação Explosiva",
            items: [
                {
                    img: "https://m.media-amazon.com/images/I/81J6CaUe+GL._AC_UF1000,1000_QL80_.jpg",
                    top10: true,
                    badge: "Imperdível",
                    badgeColor: "red",
                    progress: 70,
                    youtube: "https://youtu.be/hEJnMQG9ev8"
                },
                {
                    img: "https://img.elo7.com.br/product/zoom/265E64A/big-poster-filme-john-wick-3-parabellum-lo03-tam-90x60-cm-john-wick-3.jpg",
                    badge: "Bombando",
                    badgeColor: "red",
                    progress: 0,
                    youtube: "https://youtu.be/C0BMx-qxsP4"
                },
                {
                    img: "https://br.web.img3.acsta.net/pictures/21/05/17/16/14/1606121.jpg",
                    top10: true,
                    progress: 55,
                    youtube: "https://youtu.be/GwDN-kgMqtI"
                },
                {
                    img: "https://www.europanet.com.br/upload/id_produto/107___/107348g.jpg",
                    progress: 0,
                    youtube: "https://youtu.be/3s5PvUNFK5w"
                }
            ]
        },
        {
            title: "Thrillers Intensos",
            items: [
                {
                    img: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_SY679_.jpg",
                    top10: true,
                    badge: "Suspense",
                    badgeColor: "red",
                    youtube: "https://youtu.be/2-_-1nJf8Vg"
                },
                {
                    img: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg",
                    badge: "Recomendado",
                    badgeColor: "red",
                    youtube: "https://youtu.be/bpXfcTF6iVk"
                },
                {
                    img: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
                    progress: 40,
                    youtube: "https://youtu.be/znmZoVkCjpI"
                },
                {
                    img: "https://m.media-amazon.com/images/I/61n0tcEYikL._AC_UF894,1000_QL80_.jpg",
                    top10: true,
                    youtube: "https://youtu.be/u1uP_8VJkDQ"
                }
            ]
        }
    ],

    /* ====================== CATÁLOGO DA DAIANE =========================
       Foco em comédia e humor com filmes reais
       ============================================================== */
    "Daiane": [
        {
            title: "Comédias Hilariantes",
            items: [
                {
                    img: "https://www.movieposters.com/cdn/shop/products/df0a4dab07e028b9db874afd82054ca2_78a856f3-6fd1-4662-8c8c-4b299193ba05_1024x1024.jpg?v=1762496451",
                    top10: true,
                    badge: "Divertido",
                    badgeColor: "red",
                    progress: 100,
                    youtube: "https://youtu.be/4eaZ_48ZYog"
                },
                {
                    img: "https://m.media-amazon.com/images/I/717Wtlnc4RL._AC_UF894,1000_QL80_.jpg",
                    progress: 70,
                    youtube: "https://youtu.be/tcdUhdOlz9M"
                },
                {
                    img: "https://m.media-amazon.com/images/I/71+R6uqPFhL.jpg",
                    top10: true,
                    badge: "Rir muito",
                    badgeColor: "red",
                    youtube: "https://youtu.be/CewglxElBK0"
                },
                {
                    img: "https://m.media-amazon.com/images/I/61Jf7l+9vPL._AC_UF1000,1000_QL80_.jpg",
                    badge: "Novo",
                    badgeColor: "red",
                    youtube: "https://youtu.be/oDU84nmSDZY"
                }
            ]
        },
        {
            title: "Séries Engraçadas",
            items: [
                {
                    img: "https://upload.wikimedia.org/wikipedia/pt/7/71/Brooklyn_Nine-Nine-5.jpg",
                    progress: 50,
                    youtube: "https://youtu.be/icTOP9F17pU"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC-_FfODS_Zjq-a9UTy0fzjhDqe4rWj-Lrg&s",
                    top10: true,
                    badge: "Assista",
                    badgeColor: "red",
                    youtube: "https://youtu.be/LHOtME2DL4g"
                },
                {
                    img: "https://img.elo7.com.br/product/zoom/26A89B7/big-poster-serie-friends-lo01-tamanho-90x60-cm-nerd.jpg",
                    badge: "Original",
                    badgeColor: "red",
                    youtube: "https://youtu.be/6vGqBfxM5UA"
                },
                {
                    img: "https://i.pinimg.com/736x/d4/d9/27/d4d927c2eddfc17faaa9ca4cb5fb902b.jpg",
                    progress: 35,
                    youtube: "https://youtu.be/cjJLEYMzpjc"
                }
            ]
        }
    ],

    /* ====================== CATÁLOGO DO BRENO ==========================
       Foco em ficção científica e fantasia com filmes reais
       ============================================================== */
    "Breno": [
        {
            title: "Ficção Científica Épica",
            items: [
                {
                    img: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
                    top10: true,
                    badge: "Futurista",
                    badgeColor: "red",
                    progress: 80,
                    youtube: "https://youtu.be/i6avfCqKcQo"
                },
                {
                    img: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh26en672kn456",
                    top10: true,
                    progress: 45,
                    youtube: "https://youtu.be/n9xhJrPXop4"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0h2mUtcArLxRWfvBBZdq3iL69C7J8XOqUw&s",
                    badge: "Fantástico",
                    badgeColor: "red",
                    youtube: "https://youtu.be/eogpIG53Cis"
                },
                {
                    img: "https://ae01.alicdn.com/kf/S9a0165f09392402f910305c74657e1622.jpg",
                    progress: 0,
                    youtube: "https://youtu.be/vKQi3bBA1y8"
                }
            ]
        },
        {
            title: "Mundos Imaginários",
            items: [
                {
                    img: "https://img.elo7.com.br/product/zoom/269274A/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek.jpg",
                    badge: "Épico",
                    badgeColor: "red",
                    progress: 90,
                    youtube: "https://youtu.be/cVKkL4O60IM"
                },
                {
                    img: "https://img.elo7.com.br/product/zoom/265774E/big-poster-harry-potter-e-o-calice-de-fogo-lo02-90x60-cm-geek.jpg",
                    top10: true,
                    badge: "Lendário",
                    badgeColor: "red",
                    youtube: "https://youtu.be/80kuiBq95So"
                },
                {
                    img: "https://m.media-amazon.com/images/I/71hGGgSVC1L._AC_UF894,1000_QL80_.jpg",
                    progress: 20,
                    youtube: "https://youtu.be/-cmwzbZ072U"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitqhKf9V6e23LlbJ9kq_2uu3hwHs6hI5h0w&s",
                    top10: true,
                    youtube: "https://youtu.be/jVZRnnVSQ8k"
                }
            ]
        }
    ]
};

/* ====================== FUNÇÃO PARA OBTER CATÁLOGO ==================
   Retorna o catálogo do perfil, ou o catálogo padrão se não encontrar
   ============================================================== */
export function getCatalogoPorPerfil(nomePerfil) {
    /* Se o perfil está no objeto, retorna seu catálogo */
    if (catalogosPorPerfil[nomePerfil]) {
        return catalogosPorPerfil[nomePerfil];
    }
    
    /* Fallback: retorna o catálogo da Ana se perfil não existir */
    return catalogosPorPerfil["Ana"];
}
