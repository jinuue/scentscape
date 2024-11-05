/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});





// Define product data
const products = [
  {
      "name": "F1",
      "code": "1",
      "description": "Aficionado's version of CK ONE",
      "top_notes": ["Fress", "Citrus"],
      "middle_notes": ["Floral"],
      "base_notes": ["Amber", "Green"],
      "gender": "Eau De Parfum Unisex",
      "buy_link": "https://shopee.ph/Aficionado-Perfume-F1-Eau-De-Parfum-Unisex-i.220906467.4216042875?sp_atk=c331c179-e7b6-4936-b07a-d7b41c0fe7f9&xptdk=c331c179-e7b6-4936-b07a-d7b41c0fe7f9"
  },
  {
      "name": "F2",
      "code": "2",
      "description": "Aficionado's version of POLO SPORT",
      "top_notes": ["Citrus"],
      "middle_notes": ["Aromatic", "Fern"],
      "base_notes": ["Woody"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-F2-85ml-Eau-De-Parfum-for-Men-i.220906467.4316041841?sp_atk=900b8af4-d010-4858-9340-e78e634e30c9&xptdk=900b8af4-d010-4858-9340-e78e634e30c9"
  },
  {
      "name": "F3",
      "code": "3",
      "description": "Aficionado's version of TOMMY BOY",
      "top_notes": ["Citrus", "Marine"],
      "middle_notes": ["Fern"],
      "base_notes": ["Woody"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-F3-85ml-Eau-De-Parfum-for-Men-i.220906467.3416139350?sp_atk=759cb6e4-4de5-4ce7-bea9-d0218a9d0912&xptdk=759cb6e4-4de5-4ce7-bea9-d0218a9d0912"
  },
  {
      "name": "F4",
      "code": "4",
      "description": "Aficionado's version of HUGO BOSS for Men",
      "top_notes": ["Citrus"],
      "middle_notes": ["Floral", "Aromatic"],
      "base_notes": ["Woody"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-F4-85ml-Eau-De-Parfum-for-Men-i.220906467.4116043517?sp_atk=3b1d720f-bc87-4449-a2a3-3594c344265d&xptdk=3b1d720f-bc87-4449-a2a3-3594c344265d"
  },
  {
      "name": "F10",
      "code": "10",
      "description": "Aficionado's version of ENERGIZE BY HUGO BOSS",
      "top_notes": ["Citrus"],
      "middle_notes": ["Spicy"],
      "base_notes": ["Woody", "Musky", "Amber"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-F10-85ml-Eau-De-Parfum-for-Men-i.220906467.4916042982?sp_atk=b7b209d8-c578-49b3-b3d6-263be9f54feb&xptdk=b7b209d8-c578-49b3-b3d6-263be9f54feb"
  },
  {
      "name": "F15",
      "code": "15",
      "description": "Aficionado's version of COOL WATER BY DAVIDOFF",
      "top_notes": ["Fresh"],
      "middle_notes": ["Floral", "Fougère"],
      "base_notes": ["Woody", "Musky"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-Perfume-F15-Eau-De-Parfum-for-Men-i.220906467.5419302475?sp_atk=bd0db9c0-4929-44a3-9f24-22ba1fcef441&xptdk=bd0db9c0-4929-44a3-9f24-22ba1fcef441"
  },
  {
      "name": "F16",
      "code": "16",
      "description": "Aficionado's version of CLINIQUE HAPPY",
      "top_notes": ["Fresh", "Citrus"],
      "middle_notes": ["Ozonic", "Floral"],
      "base_notes": ["Musky"],
      "gender": "Eau De Parfum for Men",
      "buy_link": "https://shopee.ph/Aficionado-F16-85ml-Eau-de-Parfum-for-Men-i.220906467.7316042490?sp_atk=efd48c6c-df88-4684-a233-57373d286b31&xptdk=efd48c6c-df88-4684-a233-57373d286b31"
  },
  {
      "name": "F26",
      "code": "26",
      "description": "Aficionado's version of BBVLGARI AQUA ATLANTIQUE",
      "top_notes": ["Citrus", "Aqueous"],
      "middle_notes": ["Green"],
      "base_notes": ["Woody", "Amber", "Musky"],
      "gender": "Eau De Parfum Men",
      "buy_link": "https://shopee.ph/Aficionado-F26-85ml-Eau-De-Parfum-for-Men-i.220906467.5019302190?sp_atk=8ab63552-6ae2-4155-8215-e35ddb8c6ffd&xptdk=8ab63552-6ae2-4155-8215-e35ddb8c6ffd"
  },
  {
    "name": "F28",
    "code": "28",
    "description": "Aficionado's version of BLACK CODE BY ARMANI",
    "top_notes": ["Oriental"],
    "middle_notes": ["Aromatic"],
    "base_notes": ["Woody", "Powdery"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-F28-85ml-Eau-De-Parfum-for-Men-i.220906467.6016042655?sp_atk=43731dbe-4d94-4316-a17c-d9668c258aed&xptdk=43731dbe-4d94-4316-a17c-d9668c258aed"
  },

  {
    "name": "F41",
    "code": "41",
    "description": "Aficionado's version of LACOSTE RED",
    "top_notes": ["Fresh","Fruity"],
    "middle_notes": ["Woody"],
    "base_notes": ["Musky"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-F41-85ml-Eau-De-Parfum-for-Men-i.220906467.7119301608?sp_atk=3b15b06e-47ad-4101-9e15-80ed224b7356&xptdk=3b15b06e-47ad-4101-9e15-80ed224b7356"
  },
  {
    "name": "F50",
    "code": "50",
    "description": "Aficionado's version of MONT BLANC EXPLORER",
    "top_notes": ["Citrus"],
    "middle_notes": ["Aromatic","Spicy"],
    "base_notes": ["Woody"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-F50-85ml-Eau-De-Parfum-for-Men-i.220906467.21895244299?sp_atk=9c8c7d2c-26e5-4d98-94a9-d37403ee4fbe&xptdk=9c8c7d2c-26e5-4d98-94a9-d37403ee4fbe"
  },
  {
    "name": "F55",
    "code": "55",
    "description": "Aficionado's version of BVLGARI AQUA MARINE POUR HOMME",
    "top_notes": ["Marine", "Floral"],
    "middle_notes": ["Woody"],
    "base_notes": ["Musky"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-F55-85ml-Eau-De-Parfum-for-Men-i.220906467.5616043462?sp_atk=2f73bd04-3673-456f-ab05-1856297bf5e0&xptdk=2f73bd04-3673-456f-ab05-1856297bf5e0"
  },


  {
    "name": "F6",
    "code": "6",
    "description": "Aficionado's version of ESCADA LOVE IN THE AIR",
    "top_notes": ["Sweet", "Fruity"],
    "middle_notes": ["Floral"],
    "base_notes": ["Powdery"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F6-Eau-de-Parfum-for-Women-i.220906467.6639344197?sp_atk=d30412c2-c080-4e31-96a4-0a4a3b2295cc&xptdk=d30412c2-c080-4e31-96a4-0a4a3b2295cc"
  },
  {
    "name": "F12",
    "code": "12",
    "description": "Aficionado's version of HUGO BOSS for Women",
    "top_notes": ["Fruity"],
    "middle_notes": ["Oriental"],
    "base_notes": ["Green"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F12-Eau-De-Parfum-for-Women-i.220906467.7716041931?sp_atk=0f87ece7-0d29-49a1-8600-2d5026a0660b&xptdk=0f87ece7-0d29-49a1-8600-2d5026a0660b"
  },
  {
    "name": "F19",
    "code": "19",
    "description": "Aficionado's version of D&G LIGHT BLUE",
    "top_notes": ["Citrus"],
    "middle_notes": ["Floral"],
    "base_notes": ["Fruity"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F19-Eau-De-Parfum-for-Women-i.220906467.7216043578?sp_atk=c35a8791-966a-4913-890a-32d81c87a5dd&xptdk=c35a8791-966a-4913-890a-32d81c87a5dd"
  },
  {
    "name": "F35",
    "code": "35",
    "description": "Aficionado's version of ROMANTIC WISH BY VICTORIA SECRET",
    "top_notes": ["Sweet", "Fruity"],
    "middle_notes": ["Floral"],
    "base_notes": ["Fruity"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F35-85ml-Eau-De-Parfum-for-Women-i.220906467.5616043659?sp_atk=c3af2368-1993-4851-81e1-a757623db487&xptdk=c3af2368-1993-4851-81e1-a757623db487"
  },
  {
    "name": "F44",
    "code": "44",
    "description": "Aficionado's version of PARIS HILTON",
    "top_notes": ["Fruity", "Green"],
    "middle_notes": ["Floral"],
    "base_notes": ["Musky"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F44-Eau-De-Parfum-for-Women-i.220906467.7016042569?sp_atk=a6e7b995-7855-4a6a-aeca-c6ad046bcceb&xptdk=a6e7b995-7855-4a6a-aeca-c6ad046bcceb"
  },
  {
    "name": "F56",
    "code": "56",
    "description": "Aficionado's version of RALPH",
    "top_notes": ["Floral"],
    "middle_notes": ["Green"],
    "base_notes": ["Fruity"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F56-Eau-De-Parfum-for-Women-i.220906467.6016043807?sp_atk=ce28e186-268f-455e-8c3b-4ec8fe2ffc1c&xptdk=ce28e186-268f-455e-8c3b-4ec8fe2ffc1c"
  },
  {
    "name": "F60",
    "code": "60",
    "description": "Aficionado's version of J.LO LIVE BY JENNIFER LOPEZ",
    "top_notes": ["Fruity", "Floral"],
    "middle_notes": ["Sweet"],
    "base_notes": ["Amber"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F60-85ml-Eau-De-Parfum-for-Women-i.220906467.3716138817?sp_atk=84767464-8fdb-4049-a319-675d4089cd84&xptdk=84767464-8fdb-4049-a319-675d4089cd84"
  },
  {
    "name": "F68",
    "code": "68",
    "description": "Aficionado's version of FANTASY BY BRITNEY SPEARS",
    "top_notes": ["Sweet", "Vanilla"],
    "middle_notes": ["Fruity"],
    "base_notes": ["Chocolate"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F68-85ml-Eau-De-Parfum-for-Women-i.220906467.3316139590?sp_atk=a787abdd-cd53-4e8c-acbc-0ca1e77f9a38&xptdk=a787abdd-cd53-4e8c-acbc-0ca1e77f9a38"
  },

// NEW RELEASE
  {
    "name": "F8",
    "code": "8",
    "description": "Aficionado's version of VICTORIA'S SECRET BOMBSHELL",
    "top_notes": ["Floral"],
    "middle_notes": ["Fruity"],
    "base_notes": ["Sweet"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F8-Eau-De-Parfum-for-Women-i.220906467.23256970034?sp_atk=30bbe4e2-15e0-4841-9b32-40340c5274da&xptdk=30bbe4e2-15e0-4841-9b32-40340c5274da"
  },
  {
    "name": "F18",
    "code": "18",
    "description": "Aficionado's version of ESCADA CANDY LOVE",
    "top_notes": ["Fruity"],
    "middle_notes": ["Floral"],
    "base_notes": ["Gourmand"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F18-Eau-De-Parfum-for-Women-i.220906467.25558013183?sp_atk=f54653e0-318c-4333-8530-a07f429c566c&xptdk=f54653e0-318c-4333-8530-a07f429c566c"
  },
  {
    "name": "F21",
    "code": "21",
    "description": "Aficionado's version of VERSACE EROS FRAICHE (FRESH)",
    "top_notes": ["Citrus"],
    "middle_notes": ["Fresh"],
    "base_notes": ["Aromatic"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F21-Eau-De-Parfum-for-Men-i.220906467.25658012437?sp_atk=35a02a85-5a3a-4af7-aca2-9939671268fc&xptdk=35a02a85-5a3a-4af7-aca2-9939671268fc"
  },
  {
    "name": "F43",
    "code": "43",
    "description": "Aficionado's version of ARMANI ACQUA DI GIO",
    "top_notes": ["Citrus", "Aquatic"],
    "middle_notes": ["Aromatic"],
    "base_notes": ["Woody"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F43-Eau-De-Parfum-for-Men-i.220906467.21884911892?sp_atk=893075f5-9170-453b-a0bc-2969f82d9d45&xptdk=893075f5-9170-453b-a0bc-2969f82d9d45"
  },
  {
    "name": "F46",
    "code": "46",
    "description": "Aficionado's version of CLOUD BY ARIANA GRANDE",
    "top_notes": ["Fruity"],
    "middle_notes": ["Floral"],
    "base_notes": ["Gourmand"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F46-Eau-De-Parfum-for-Women-i.220906467.22036389506?sp_atk=004ede2c-ceed-4043-bd4a-f4f61f265d4c&xptdk=004ede2c-ceed-4043-bd4a-f4f61f265d4c"
  },
  {
    "name": "F51",
    "code": "51",
    "description": "Aficionado's version of DIOR SAUVAGE",
    "top_notes": ["Citrus"],
    "middle_notes": ["Fresh", "Aromatic","Spicy"],
    "base_notes": ["Woody","Musky"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F51-Eau-De-Parfum-for-Men-i.220906467.22121221116?sp_atk=9c3ebddf-a6f6-4d85-b7a1-4eae3fd3ab19&xptdk=9c3ebddf-a6f6-4d85-b7a1-4eae3fd3ab19"
  },
  {
    "name": "F52",
    "code": "52",
    "description": "Aficionado's version of MFK BACCARAT ROUGE 540",
    "top_notes": ["Amber"],
    "middle_notes": ["Aromatic","Floral"],
    "base_notes": ["Woody","Spicy"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F52-Eau-de-Parfum-for-Women-i.220906467.23949334528?sp_atk=a36ea3bf-51d5-4edf-a843-df3152be9e5f&xptdk=a36ea3bf-51d5-4edf-a843-df3152be9e5f"
  },
  {
    "name": "F59",
    "code": "59",
    "description": "Aficionado's version of DELINA BY PARFUMS DE MARLY",
    "top_notes": ["Citrus"],
    "middle_notes": ["Floral"],
    "base_notes": ["Musky"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F59-Eau-De-Parfum-for-Women-i.220906467.25124165500?sp_atk=7906cf70-8698-4327-8664-84c47db723b0&xptdk=7906cf70-8698-4327-8664-84c47db723b0"
  },
  {
    "name": "F61",
    "code": "61",
    "description": "Aficionado's version of YSL LA NUIT BLUE ELECTRIQUE VERSACE EROS",
    "top_notes": ["Aromatic"],
    "middle_notes": ["Spicy"],
    "base_notes": ["Fougère"],
    "gender": "Eau De Parfum <Men>",
    "buy_link": "https://shopee.ph/Aficionado-F61-Eau-De-Parfum-For-Men-i.220906467.24174167276?sp_atk=d3ecbe7a-cbaf-4eae-917a-03088e83fddb&xptdk=d3ecbe7a-cbaf-4eae-917a-03088e83fddb"
  },
  {
    "name": "F69",
    "code": "69",
    "description": "Aficionado's version of VERSACE EROS",
    "top_notes": ["Amber"],
    "middle_notes": ["Woody"],
    "base_notes": ["Woody"],
    "gender": "Eau De Parfum Men",
    "buy_link": "https://shopee.ph/Aficionado-Perfume-F69-Eau-De-Parfum-for-Men-i.220906467.19277623294?sp_atk=cfb1d9a9-f719-410a-aa72-71731af1827b&xptdk=cfb1d9a9-f719-410a-aa72-71731af1827b"
  },

// AFICIONADO ORIGINALS
{
    "name": "F9",
    "code": "9",
    "description": "Aficionado's #Lively",
    "top_notes": ["Citrus"],
    "middle_notes": ["Fruity"],
    "base_notes": ["Fruity"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/F9-85ML-AFICIONADO-PERFUME-i.338830269.16705593559?sp_atk=9152fb14-35c1-4481-9ee3-01deaec0f43c&xptdk=9152fb14-35c1-4481-9ee3-01deaec0f43c"
  },
  {
    "name": "F17",
    "code": "17",
    "description": "Aficionado's #Moves",
    "top_notes": ["Fruity"],
    "middle_notes": ["Aromatic"],
    "base_notes": ["Fougère"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F17-85ml-Eau-De-Parfum-for-Men-and-Women-(Unisex)-i.593717915.15850984801?sp_atk=8bd76385-c11f-4465-94fd-8fda6b5c2a85&xptdk=8bd76385-c11f-4465-94fd-8fda6b5c2a85"
  },
  {
    "name": "F37",
    "code": "37",
    "description": "Aficionado's #Like Him",
    "top_notes": ["Fruity"],
    "middle_notes": ["Floral","Sweet"],
    "base_notes": ["Woody"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F1-F2-F3-F4-F10-F28-F16-F35-F55-F60-F68-F69-100-60-30-10ml-Perfume-for-Man-Women-M3Z-i.327092787.18338640832?sp_atk=29bf2fde-6284-451d-8ee4-8571d5bc171e&xptdk=29bf2fde-6284-451d-8ee4-8571d5bc171e"
  },
  {
    "name": "F49",
    "code": "49",
    "description": "Aficionado's #Like Her",
    "top_notes": ["Oriental"],
    "middle_notes": ["Woody"],
    "base_notes": ["Woody"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/Aficionado-F1-F2-F3-F4-F10-F28-F16-F35-F55-F60-F68-F69-100-60-30-10ml-Perfume-for-Man-Women-M3Z-i.327092787.18338640832?sp_atk=29bf2fde-6284-451d-8ee4-8571d5bc171e&xptdk=29bf2fde-6284-451d-8ee4-8571d5bc171e"
  },
  {
    "name": "F57",
    "code": "57",
    "description": "Aficionado's #Fearless",
    "top_notes": ["Woody"],
    "middle_notes": ["Musky"],
    "base_notes": ["Spicy"],
    "gender": "Eau De Parfum Women",
    "buy_link": "https://shopee.ph/85ml-F57-Aficionado-Perfume-for-men-i.658993562.26511668716?sp_atk=5a72cdda-1937-4aaa-b0f3-932e02104710&xptdk=5a72cdda-1937-4aaa-b0f3-932e02104710"
  }
];

function populateProductCards(filteredProducts = products) {
  const productContainer = document.getElementById('all-products');
  productContainer.innerHTML = ''; // Clear previous content

  filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      // Determine image paths based on gender
      let image1, image2;
      if (product.gender.includes("Men")) {
          image1 = "assets/img/product-2-1.png";
          image2 = "assets/img/product-2-2.png";
      } else if (product.gender.includes("Women")) {
          image1 = "assets/img/product-1-1.png";
          image2 = "assets/img/product-1-2.png.png";
      } else {
          image1 = "assets/img/product-5-1.png";
          image2 = "assets/img/product-5-2.png";
      }

      // HTML structure for the product card
      card.innerHTML = `
          <div class="product-image">
              <img src="${image1}" alt="${product.name}" class="main-photo">
              <img src="${image2}" alt="${product.name} Hover" class="hover-photo">
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <a href="${product.buy_link}" class = "buy-button" target="_blank">Buy Now</a>
      `;

      productContainer.appendChild(card);
  });
}

// Initial population of product cards
populateProductCards();

function findPerfumes() {
  // Get selected values from the dropdowns
  const selectedtopNote = document.getElementById("topNote").value;
  const selectedmiddleNote = document.getElementById("middleNote").value;
  const selectedbaseNote = document.getElementById("baseNote").value;

  // Filter perfumes based on selected notes
  const filteredPerfumes = products.filter(product => {
      return (selectedtopNote === "" || product.top_notes.includes(selectedtopNote)) &&
             (selectedmiddleNote === "" || product.middle_notes.includes(selectedmiddleNote)) &&
             (selectedbaseNote === "" || product.base_notes.includes(selectedbaseNote));
  });

  // Display results
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (filteredPerfumes.length > 0) {
      filteredPerfumes.forEach(perfume => {
          const perfumeElement = document.createElement("div");
          perfumeElement.classList.add("product-card");
          perfumeElement.classList.add("result-item"); // Add this line

          // Determine image paths based on gender
          let image1, image2;
          if (perfume.gender.includes("Men")) {
              image1 = "assets/product-4-1.png";
              image2 = "assets/product-4-2.png";
          } else if (perfume.gender.includes("Women")) {
              image1 = "assets/product-3-1.png";
              image2 = "assets/product-3-2.png";
          } else {
              image1 = "assets/product-2-1.png";
              image2 = "assets/product-2-2.png";
          }

          // Construct the detailed HTML for each product
          perfumeElement.innerHTML = `
              <div class="product-image">
                  <img src="${image1}" alt="${perfume.name}" class="main-photo">
                  <img src="${image2}" alt="${perfume.name} Hover" class="hover-photo">
              </div>
              <h3>${perfume.name}</h3>
              <p>${perfume.description}</p>
              <p><strong>Gender:</strong> ${perfume.gender}</p>
              <a href="${perfume.buy_link}" class="buy-button" target="_blank">Buy Now</a>
          `;

          resultsDiv.appendChild(perfumeElement);
      });
  } else {
      resultsDiv.textContent = "No perfumes found.";
  }
}
