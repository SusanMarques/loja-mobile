// import { Category } from "../types/category";
// import { Product } from "../types/product";

// type Data = {
//     categories: Category[],
//     products: Product[]
// };
// export const data: Data = {
//     categories: [
//         {
//             id: 1,
//             title: 'Nova coleção',
//             cover: 'https://img.lojasrenner.com.br/item/883896233/original/6.jpg'
//         },
//         {
//             id: 2,
//             title: 'Blusões e Suéteres',
//             cover: 'https://img.lojasrenner.com.br/item/670856991/original/3.jpg'
//         },
//         {
//             id: 3,
//             title: 'Camisetas',
//             cover: 'https://img.lojasrenner.com.br/item/879734485/original/3.jpg'
//         },
//         {
//             id: 4,
//             title: 'Bermudas',
//             cover: 'https://img.lojasrenner.com.br/item/879654282/original/3.jpg'
//         },
//         {
//             id: 5,
//             title: 'Blazers',
//             cover: 'https://img.lojasrenner.com.br/item/881463792/original/3.jpg'
//         }
//     ],
//     products:[
//         { id: 1, idCategory: 1, image: "https://img.lojasrenner.com.br/item/883896233/original/3.jpg", title: "Camiseta azul", description: "Camiseta básica azul", price: 319.90 },
//         { id: 2, idCategory: 1, image: "https://img.lojasrenner.com.br/item/879734485/original/3.jpg", title: "Camisa azul claro", description: "Camiseta em Algodão com Bordado Nature Rosa", price: 119.90 },
//         { id: 3, idCategory: 1, image: "https://img.lojasrenner.com.br/item/675077815/original/3.jpg", title: "Camisa rosa ", description: "Camisa Comfort Básica em Linho com Gola Colarinho Rosa Claro", price: 34.99 },
//         { id: 4, idCategory: 1, image: "https://img.lojasrenner.com.br/item/897680388/original/2.jpg", title: "Bermuda em Algodão", description: "Bermuda em Algodão Texturizada e Cordão no Cós Bege", price: 79.99 },
//         { id: 5, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927317943/original/2.jpg", title: "Camiseta Polo", description: "Camiseta Polo Regular em Crochê com Mix de Pontos Off White", price: 59.99 },
//         { id: 6, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927319615/original/3.jpg", title: "Camiseta em Algodão", description: "Camiseta em Algodão com Estampa Quadro Flowers Off White", price: 99.99 },
//         { id: 7, idCategory: 1, image: "https://img.lojasrenner.com.br/item/914512328/original/2.jpg", title: "Óculos de Sol", description: "Óculos de Sol Redondo em Metal com Hastes Finas e Lente Fumê Prata", price: 89.99 },
//         { id: 8, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927959241/original/8.jpg", title: "Tênis ", description: "Tênis em Material Sintético com Textura Everlast Range 03 Branco e Marrom", price: 219.99 },
//         { id: 9, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927943215/original/3.jpg", title: "Regata Regular", description: "Regata Regular com Textura em Tricô Cinza", price: 149.99 },
//         { id: 10, idCategory: 1, image: "https://img.lojasrenner.com.br/item/916265009/original/3.jpg", title: "Calça em Sarja", description: "Calça em Sarja com Bolso Cargo Bege", price: 199.99 },
//         { id: 11, idCategory: 1, image: "https://img.lojasrenner.com.br/item/897680388/original/2.jpg", title: "Bermuda", description: "Bermuda em Algodão Texturizada e Cordão no Cós Bege", price: 139.90 },
//         { id: 12, idCategory: 1, image: "https://img.lojasrenner.com.br/item/912647552/original/3.jpg", title: "Calça em Linho", description: "Calça em Linho com Textura e Amarração no Cós Preto", price: 179.99 },
//         { id: 13, idCategory: 1, image: "https://img.lojasrenner.com.br/item/916849637/original/3.jpg", title: "Bermuda com cós", description: "Bermuda com Cós Fixo e Cordão Contrastante Azul Escuro", price: 89.99 },
//         { id: 14, idCategory: 1, image: "https://img.lojasrenner.com.br/item/916266554/original/3.jpg", title: "Camisa em Oxford", description: "Camisa em Oxford com Abotoamento Frontal Verde", price: 104.99 },
//         { id: 15, idCategory: 1, image: "https://img.lojasrenner.com.br/item/796263981/original/3.jpg", title: "Camiseta Regular ", description: "Camiseta Regular em Algodão com Gola Redonda Azul Marinho", price: 150.99 },
//         { id: 16, idCategory: 1, image: "https://img.lojasrenner.com.br/item/837056233/original/3.jpg", title: "Bermuda Cargo", description: "Bermuda Cargo em Algodão com Elastano e Detalhes de Pesponto Marrom", price: 159.99 },
//         { id: 17, idCategory: 1, image: "https://img.lojasrenner.com.br/item/916256532/original/3.jpg", title: "Bermuda Esportiva", description: "Bermuda Esportiva com Cós Elástico e Bolsos com Zíper Cinza", price: 89.99 },
//         { id: 18, idCategory: 1, image: "https://img.lojasrenner.com.br/item/879720091/original/3.jpg", title: "Bermuda Cargo com Cós", description: "Bermuda Cargo com Cós Elástico e Bolsos Táticos Bege", price: 139.99 },
//         { id: 19, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927580611/original/3.jpg", title: "Camiseta em Tricô", description: "Camiseta em Tricô com Textura Quadriculada Verde", price: 139.99 },
//         { id: 20, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927975639/original/3.jpg", title: "Camisa com Textura", description: "Camisa com Textura e Estampa Floral Branco", price: 179.99 },
//         { id: 21, idCategory: 2, image: "https://img.lojasrenner.com.br/item/882217374/original/3.jpg", title: "Blusão em Moletom", description: "Blusão em Moletom Forro em Fleece e Estampa em Lettering Verde", price: 99.99 },
//         { id: 22, idCategory: 2, image: "https://img.lojasrenner.com.br/item/879672659/original/3.jpg", title: "Moletom Forrado com Capuz", description: "Blusão em Moletom Forrado com Capuz e Estampa Tupac Cinza", price: 199.99 },
//         { id: 23, idCategory: 2, image: "https://img.lojasrenner.com.br/item/879068419/original/3.jpg", title: "Blusão Comfort em Moletom ", description: "Blusão Comfort em Moletom com Lettering Take it Easy Verde", price: 99.99 },
//         { id: 24, idCategory: 2, image: "https://img.lojasrenner.com.br/item/645646722/original/3.jpg", title: "Blusão Fechado em Algodão", description: "Blusão Fechado em Algodão com Estampa High Water Marrom", price: 79.99 },
//         { id: 25, idCategory: 2, image: "https://img.lojasrenner.com.br/item/831648553/original/3.jpg", title: "Blusão Balloon", description: "Blusão Balloon Fechado em Moletom com Estampa Tupac e Lettering na Manga Bege", price: 79.99 },
//         { id: 26, idCategory: 2, image: "https://img.lojasrenner.com.br/item/595797353/original/2.jpg", title: "Blusão Fechado Básico", description: "Blusão Fechado Básico em Moletom com Detalhes em Ribana Preto", price: 79.99 },
//         { id: 27, idCategory: 2, image: "https://img.lojasrenner.com.br/item/796268108/original/3.jpg", title: "Blusão Fechado em Moletom ", description: "Blusão Fechado em Moletom com Gola Média e Punhos Ajustados Preto", price: 699.99 },
//         { id: 28, idCategory: 2, image: "https://img.lojasrenner.com.br/item/883879530/original/3.jpg", title: "Blusão em Moletom Forrado", description: "Blusão em Moletom Forrado com Estampa Camp Adventure Marrom", price: 119.99 },
//         { id: 29, idCategory: 2, image: "https://img.lojasrenner.com.br/item/879734910/original/3.jpg", title: "Blusão Fechado Básico", description: "Blusão Fechado Básico em Moletom com Detalhes em Ribana Cinza", price: 79.99 },
//         { id: 30, idCategory: 2, image: "https://img.lojasrenner.com.br/item/623432352/original/3.jpg", title: "Moletom com Lettering", description: "Blusão Fechado em Moletom com Lettering Growth Through Adventure Marrom", price: 59.99 },   
//         { id: 31, idCategory: 2, image: "https://img.lojasrenner.com.br/item/598791133/original/3.jpg", title: "Blusão Oversized em Algodão", description: "Blusão Oversized em Algodão com Capuz e Bolso Canguru Bege", price: 99.99 },
//         { id: 32, idCategory: 2, image: "https://img.lojasrenner.com.br/item/606009608/original/3.jpg", title: "Blusão Fechado em Fleece", description: "Blusão Fechado em Fleece com Capuz e Bolso Canguru Bege", price:  159.99 },
//         { id: 33, idCategory: 2, image: "https://img.lojasrenner.com.br/item/749448472/original/3.jpg", title: "Moletom com Capuz e Bolsinhos", description: "Blusão Fechado em Moletom com Capuz e Bolsinhos Táticos Preto", price: 34.99 },
//         { id: 34, idCategory: 2, image: "https://img.lojasrenner.com.br/item/793850881/original/12.jpg", title: "Moletom com Estampa de Basquete", description: "Blusão Moletom com Estampa de Basquete Preto", price: 79.99 },
//         { id: 35, idCategory: 2, image: "https://img.lojasrenner.com.br/item/595190560/original/1.jpg", title: " Canguru Rosa Claro", description: "Blusão Fechado em Moletom com Capuz e Bolso Canguru Rosa Claro", price: 59.99 },
//         { id: 36, idCategory: 2, image: "https://img.lojasrenner.com.br/item/684046578/original/3.jpg", title: "Suéter Comfort em Viscose", description: "Suéter Comfort em Viscose Texturizada com Gola Alta e Zíper Cinza", price: 99.99 },
//         { id: 37, idCategory: 2, image: "https://img.lojasrenner.com.br/item/597578752/original/3.jpg", title: "Bolso Canguru Cinza Escuro", description: "Blusão Fechado em Moletom com Capuz e Bolso Canguru Cinza Escuro", price: 89.99 },
//         { id: 38, idCategory: 2, image: "https://img.lojasrenner.com.br/item/670856991/original/3.jpg", title: "Bolso Canguru Azul", description: "Blusão Oversized em Algodão com Capuz e Bolso Canguru Azul", price: 79.99 },
//         { id: 39, idCategory: 2, image: "https://img.lojasrenner.com.br/item/595190615/original/3.jpg", title: "Bolso Canguru Azul Claro", description: "Blusão Fechado em Moletom com Capuz e Bolso Canguru Azul Claro", price: 79.99 },
//         { id: 40, idCategory: 2, image: "https://img.lojasrenner.com.br/item/598791299/original/1.jpg", title: "Capuz e Bolso Canguru Lilás", description: "Blusão Oversized em Algodão com Capuz e Bolso Canguru Lilás", price: 99.99 },
//         { id: 41, idCategory: 3, image: "https://img.lojasrenner.com.br/item/915053872/original/3.jpg", title: "Camiseta Relaxed com Estampa", description: "Camiseta Relaxed com Estampa Charlie Brown Jr com QR Code Marrom", price: 79.99 },
//         { id: 42, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927608636/original/3.jpg", title: "Camiseta Boxy em Algodão", description: "Camiseta Boxy em Algodão Estampa Chorão Charlie Brown Jr Bege", price: 79.99 },
//         { id: 43, idCategory: 3, image: "https://img.lojasrenner.com.br/item/922258788/original/3.jpg", title: "Camiseta Boxy com Estampa", description: "Camiseta Boxy com Estampa Charlie Brown Jr Preto", price: 199.99 },
//         { id: 44, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927608783/original/3.jpg", title: "Camiseta Comfort em Algodão", description: "Camiseta Comfort em Algodão e Estampa Charlie Brown Jr Preto", price: 64.99 },
//         { id: 45, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927465111/original/3.jpg", title: "Camiseta Overboxy em Algodão", description: "Camiseta Overboxy em Algodão Estampa Matuê Cinza", price: 99.99 },
//         { id: 46, idCategory: 3, image: "https://img.lojasrenner.com.br/item/913864815/original/3.jpg", title: "Algodão Estampa Out Of", description: "Camiseta Comfort em Algodão Estampa Out Of Office Cinza", price: 99.99 },
//         { id: 47, idCategory: 3, image: "https://img.lojasrenner.com.br/item/914477139/original/3.jpg", title: "Camiseta Manga Curta", description: "Camiseta Manga Curta em Moletinho Cinza", price: 119.99 },
//         { id: 48, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927268651/original/3.jpg", title: "Camiseta Oversized", description: "Camiseta Oversized em Algodão Malhão com Estampa Out Of Tune Branco", price: 54.99 },
//         { id: 49, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927491191/original/3.jpg", title: "Relaxed em Algodão e Estampa Matuê", description: "Camiseta Relaxed em Algodão e Estampa Matuê Frente e Costas Marrom", price: 199.99 },
//         { id: 50, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927465031/original/3.jpg", title: "Matuê Wiu e Teto Preto", description: "Camiseta Relaxed em Algodão Malhão com Estampa Matuê Wiu e Teto Preto.", price: 99.99 },
//         { id: 51, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927464978/original/3.jpg", title: "Estampa Teto Cinza", description: "Camiseta Overboxy em Algodão Estampa Teto Cinza", price: 99.99 },
//         { id: 52, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927886716/original/3.jpg", title: "Camiseta em Algodão com Estampa Lettering ", description: "Camiseta em Algodão com Estampa Lettering Branco", price: 69.99 },
//         { id: 53, idCategory: 3, image: "https://img.lojasrenner.com.br/item/921649146/original/3.jpg", title: "Camiseta com Textura Horizontal", description: "Camiseta com Textura Horizontal em Listras Branco", price: 99.99 },
//         { id: 54, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927319615/original/3.jpg", title: "Estampa Quadro Flowers Off White", description: "Camiseta em Algodão com Estampa Quadro Flowers Off White", price: 69.99 },
//         { id: 55, idCategory: 3, image: "https://img.lojasrenner.com.br/item/910246237/original/3.jpg", title: "Camiseta em Algodão com Textura", description: "Camiseta em Algodão com Textura Vertical Bege", price: 99.99 },
//         { id: 56, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927315956/original/3.jpg", title: "Estampa Zig Zag Preto/ Cinza", description: "Camiseta com Textura e Estampa Zig Zag Preto/ Cinza", price: 59.99 },
//         { id: 57, idCategory: 3, image: "https://img.lojasrenner.com.br/item/914448135/original/3.jpg", title: "Estampa Listrada Preto/ Branco", description: "Camiseta em Tecido de Algodão Texturizado com Estampa Listrada Preto/ Branco", price: 119.99 },
//         { id: 58, idCategory: 3, image: "https://img.lojasrenner.com.br/item/889850501/original/3.jpg", title: "Algodão com Friso Contrastante", description: "Camiseta em Algodão com Friso Contrastante na Gola Preto", price: 94.99 },
//         { id: 59, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927070143/original/3.jpg", title: "Camiseta Slim em Algodão Peruano", description: "Camiseta Slim em Algodão Peruano com Textura Canelada Amarelo Queimado", price: 179.99 },
//         { id: 60, idCategory: 3, image: "https://img.lojasrenner.com.br/item/927740021/original/3.jpg", title: "Camiseta em Algodão Texturizado ", description: "Camiseta em Algodão Texturizado com Gola Redonda Marrom Night Desert", price: 31.99 },   
//         { id: 61, idCategory: 4, image: "https://img.lojasrenner.com.br/item/894064635/original/3.jpg", title: "Bermuda Surf Estampada", description: "Conforto e estilo nas ondas.", price: 79.99 },
//         { id: 62, idCategory: 4, image: "https://img.lojasrenner.com.br/item/879654231/original/3.jpg", title: "Bermuda Cargo Militar", description: "Funcional e resistente.", price: 89.90 },
//         { id: 63, idCategory: 4, image: "https://img.lojasrenner.com.br/item/899446819/original/3.jpg", title: "Bermuda Jeans Tradicional", description: "Clássica e versátil.", price: 99.99 },
//         { id: 64, idCategory: 4, image: "https://img.lojasrenner.com.br/item/543747805/original/3.jpg", title: "Bermuda Tática Outdoor", description: "Durabilidade e praticidade.", price: 119.90 },
//         { id: 65, idCategory: 4, image: "https://img.lojasrenner.com.br/item/544356478/original/3.jpg", title: "Bermuda Moletom Slim", description: "Conforto e estilo casual.", price: 69.90 },
//         { id: 66, idCategory: 4, image: "https://img.lojasrenner.com.br/item/670275716/original/3.jpg", title: "Bermuda Esportiva Dry Fit", description: "Perfeita para atividades físicas.", price: 59.99 },
//         { id: 67, idCategory: 4, image: "https://img.lojasrenner.com.br/item/745247358/original/3.jpg", title: "Bermuda Xadrez Clássica", description: "Estampa casual e moderna.", price: 89.99 },
//         { id: 68, idCategory: 4, image: "https://img.lojasrenner.com.br/item/638408566/original/3.jpg", title: "Bermuda Água Rápida Secagem", description: "Ideal para a praia e piscina.", price: 79.90 },
//         { id: 69, idCategory: 4, image: "https://img.lojasrenner.com.br/item/864666184/original/3.jpg", title: "Bermuda Social Slim Fit", description: "Elegante e ajustada ao corpo.", price: 109.99 },
//         { id: 70, idCategory: 4, image: "https://img.lojasrenner.com.br/item/638408515/original/1.jpg", title: "Bermuda de Sarja Casual", description: "Estilo despojado e confortável.", price: 94.90 },
//         { id: 71, idCategory: 4, image: "https://img.lojasrenner.com.br/item/598266363/original/12.jpg", title: "Bermuda Listrada Verão", description: "Leveza para os dias quentes.", price: 64.99 },
//         { id: 72, idCategory: 4, image: "https://img.lojasrenner.com.br/item/792053732/original/3.jpg", title: "Bermuda Cargo Utility", description: "Múltiplos bolsos, estilo prático.", price: 89.90 },
//         { id: 73, idCategory: 4, image: "https://img.lojasrenner.com.br/item/553314843/original/3.jpg", title: "Bermuda Linho Elegante", description: "Conforto e sofisticação.", price: 129.90 },
//         { id: 74, idCategory: 4, image: "https://img.lojasrenner.com.br/item/542945800/original/12.jpg", title: "Bermuda de Nylon Leve", description: "Secagem rápida e durável.", price: 69.99 },
//         { id: 75, idCategory: 4, image: "https://img.lojasrenner.com.br/item/638408312/original/3.jpg", title: "Bermuda de Algodão Básica", description: "Simples e confortável.", price: 49.99 },
//         { id: 76, idCategory: 4, image: "https://img.lojasrenner.com.br/item/611398468/original/3.jpg", title: "Bermuda Fitness Slim", description: "Para um treino confortável.", price: 59.90 },
//         { id: 77, idCategory: 4, image: "https://img.lojasrenner.com.br/item/764444955/original/3.jpg", title: "Bermuda Praia Floral", description: "Estilo tropical para o verão.", price: 84.99 },
//         { id: 78, idCategory: 4, image: "https://img.lojasrenner.com.br/item/638478425/original/1.jpg", title: "Bermuda Estilo Urbano", description: "Descolada para o dia a dia.", price: 74.90 },
//         { id: 79, idCategory: 4, image: "https://img.lojasrenner.com.br/item/548234873/original/6.jpg", title: "Bermuda Cintura Alta", description: "Design moderno e confortável.", price: 99.90 },
//         { id: 80, idCategory: 4, image: "https://img.lojasrenner.com.br/item/584379578/original/1.jpg", title: "Bermuda de Couro Sintético", description: "Estilo ousado e inovador.", price: 139.99 },
//         { id: 81, idCategory: 5, image: "https://img.lojasrenner.com.br/item/639042615/original/3.jpg", title: "Blazer Slim Preto", description: "Elegância e sofisticação no corte slim.", price: 199.99 },
//         { id: 82, idCategory: 5, image: "https://img.lojasrenner.com.br/item/869461612/original/3.jpg", title: "Blazer de Veludo Marrom", description: "Textura suave para ocasiões especiais.", price: 249.90 },
//         { id: 83, idCategory: 5, image: "https://img.lojasrenner.com.br/item/882096082/original/3.jpg", title: "Blazer Xadrez Casual", description: "Estilo moderno para o dia a dia.", price: 179.99 },
//         { id: 84, idCategory: 5, image: "https://img.lojasrenner.com.br/item/914555985/original/3.jpg", title: "Blazer Cinza Clássico", description: "Sofisticação e versatilidade em um só look.", price: 199.90 },
//         { id: 85, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927468995/original/3.jpg", title: "Blazer Azul Marinho", description: "Elegância discreta para qualquer ocasião.", price: 189.99 },
//         { id: 86, idCategory: 5, image: "https://img.lojasrenner.com.br/item/893448400/original/3.jpg", title: "Blazer de Algodão Bege", description: "Conforto e leveza em um blazer casual.", price: 169.90 },
//         { id: 87, idCategory: 5, image: "https://img.lojasrenner.com.br/item/566972124/original/3.jpg", title: "Blazer Listrado Social", description: "Design arrojado para ambientes formais.", price: 209.99 },
//         { id: 88, idCategory: 5, image: "https://img.lojasrenner.com.br/item/866446311/original/3.jpg", title: "Blazer Slim Fit Vinho", description: "Perfeito para uma presença marcante.", price: 229.90 },
//         { id: 89, idCategory: 5, image: "https://img.lojasrenner.com.br/item/775250814/original/3.jpg", title: "Blazer Texturizado Preto", description: "Estilo e elegância com toque moderno.", price: 239.99 },
//         { id: 90, idCategory: 5, image: "https://img.lojasrenner.com.br/item/633047191/original/3.jpg", title: "Blazer Esportivo Cinza", description: "Estilo casual com corte esportivo.", price: 179.90 },
//         { id: 91, idCategory: 5, image: "https://img.lojasrenner.com.br/item/598276545/small/3.jpg", title: "Blazer Slim Branco", description: "Ideal para eventos formais e sofisticados.", price: 219.99 },
//         { id: 92, idCategory: 5, image: "https://img.lojasrenner.com.br/item/552703425/original/3.jpg", title: "Blazer Estampado Floral", description: "Ousadia e estilo para o verão.", price: 249.90 },
//         { id: 93, idCategory: 5, image: "https://img.lojasrenner.com.br/item/672088367/original/12.jpg", title: "Blazer Linho Leve", description: "Perfeito para dias mais quentes.", price: 189.90 },
//         { id: 94, idCategory: 5, image: "https://img.lojasrenner.com.br/item/881463792/medium/3.jpg", title: "Blazer Bordô Casual", description: "Estilo casual e elegante.", price: 199.99 },
//         { id: 95, idCategory: 5, image: "https://img.lojasrenner.com.br/item/884453952/original/3.jpg", title: "Blazer de Lã Inverno", description: "Ideal para dias frios, sem perder o estilo.", price: 259.99 },
//         { id: 96, idCategory: 5, image: "https://img.lojasrenner.com.br/item/883290531/original/3.jpg", title: "Blazer Dupla Face", description: "Versatilidade com duas opções de uso.", price: 279.90 },
//         { id: 97, idCategory: 5, image: "https://img.lojasrenner.com.br/item/550113325/original/3.jpg", title: "Blazer Alfaiataria Azul", description: "Corte clássico com toque moderno.", price: 229.99 },
//         { id: 98, idCategory: 5, image: "https://img.lojasrenner.com.br/item/897662500/original/3.jpg", title: "Blazer Social Grafite", description: "Elegância em tons neutros.", price: 199.90 },
//         { id: 99, idCategory: 5, image: "https://img.lojasrenner.com.br/item/680477784/original/3.jpg", title: "Blazer Esportivo Preto", description: "Estilo esportivo para o dia a dia.", price: 189.99 },
//         { id: 100, idCategory: 5, image: "https://img.lojasrenner.com.br/item/713447486/original/3.jpg", title: "Blazer Azul Claro", description: "Estilo suave e moderno.", price: 219.90 },
//     ]
// }