var PromoCategory = require('../models/promo')

// travel
const travelData = [
  {
    title: "Free Access to Airport Lounge (Lounge Key) with Mega Travel Card",
    promo_area: "Jadetabek, Bandung, Surabaya",
    promo_period: "01 Mei 2019 - 31 Desember 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/1/20180515164538.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/1/002A-landing-page-MTCLOUNGEKEY(1).jpg",
    description: "",
    expired: false,
    category: "travel"
  },
  {
    title: "Mega Executive Lounge dan The Coffee Bean & Tea Leaf Lounge dengan 1000 Mega Reward Point",
    promo_area: "Nasional",
    promo_period: "01 Agustus 2018 - 01 Agustus 2030",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/2/20180731190212.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/2/CBTLplatinumLounge-lp-04A.jpg",
    description: "",
    expired: false,
    category: "travel"
  },
  {
    title: "XXI Promo with VISA Contactless - Buy 1 Get 1 Free Ticket + 1 Free Popcorn + 1 Free Softdrink",
    promo_area: "Nasional",
    promo_period: "01 Juli 2019 - 30 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/3/20190703113641.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/3/0-landing-page-XXI.jpg",
    description: "",
    expired: false,
    category: "travel"
  },
  {
    title: "Antavaya - Royal Carribean & Celebrity Cruises Expo",
    promo_area: "Nasional",
    promo_period: "12 Agustus 2019 - 18 Agustus 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/4/20190815165054.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/4/01-landing-page-ANTAVAYA.jpg",
    description: "",
    expired: false,
    category: "travel"
  },
  {
    title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
    promo_area: "Jakarta",
    promo_period: "01 April 2019 - 31 Maret 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/5/20190816163018.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/5/1-MEGAFIRST-lp.jpg",
    description: "",
    expired: false,
    category: "travel"
  },
  {
    title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
    promo_area: "Bali",
    promo_period: "01 April 2019 - 31 Maret 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/6/20190816163319.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/travel/6/2-MEGAFIRST-lp.jpg",
    description: "",
    expired: false,
    category: "travel"
  },
]

// lifestyle
const lifestyleData = [
  {
    title: "ECOMMERCE AGUSTUSAN DISKON HINGGA 800 RIBU",
    promo_area: "Nasional",
    promo_period: "01 Agustus 2019 - 15 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/1/20190809210606.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/1/01AGUSTUSANbrgMegaECOMM-lp.jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
  {
    title: "Metro Independence Day",
    promo_area: "Nasional",
    promo_period: "16 Agustus 2019 - 18 Agustus 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/2/20190816170412.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/2/Untitled(4).jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
  {
    title: "Clarte Jewerly Cicilan 0%",
    promo_area: "Nasional",
    promo_period: "01 Juli 2019 - 30 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/3/20190516142039.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/3/indexLP.jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
  {
    title: "Pure Heals Disc. 15%",
    promo_area: "Jakarta",
    promo_period: "01 Maret 2019 - 13 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/4/20190503092923.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/4/00-landing-page-PUREHEALS(1).jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
  {
    title: "Metro Mega Card Cashback up to IDR 500.000",
    promo_area: "Nasional",
    promo_period: "17 September 2018 - 17 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/5/20180914143704.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/5/02-landing-page-MMC.jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
  {
    title: "Martha Tilaar Salon Day Spa Disc. 20%",
    promo_area: "Banjarmasin",
    promo_period: "30 Juni 2018 - 29 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/6/20180926095404.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/lifestyle/6/00-landing-page-MT.jpg",
    description: "",
    expired: false,
    category: "lifestyle"
  },
]

//  f&b
const foodData = [
  {
    title: "Tasty Kitchen disc. up to 20%",
    promo_area: "Jakarta",
    promo_period: "01 November 2018 - 31 Desember 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/1/20181203103812.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/1/02-landing-page-TASTY-revkn(1).jpg",
    description: "",
    expired: false,
    category: "food"
  },
  {
    title: "Warung Wardhani diskon hingga 20%",
    promo_area: "Jakarta",
    promo_period: "15 Februari 2019 - 31 Desember 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/2/20190215092639.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/2/00-landing-page-WARDHANI.jpg",
    description: "",
    expired: false,
    category: "food"
  },
  {
    title: "Haka Restaurant 15% food only",
    promo_area: "Jakarta",
    promo_period: "27 Juni 2019 - 31 Mei 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/3/20190705170026.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/3/00-landing-page-HAKA.jpg",
    description: "",
    expired: false,
    category: "food"
  },
  {
    title: "Makan Bareng Mega Ramadan",
    promo_area: "Jabodetabek",
    promo_period: "01 Mei 2019 - 28 Februari 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/4/20190503151553.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/4/MBMramadhan-lp3(1).jpg",
    description: "",
    expired: false,
    category: "food"
  },
  {
    title: "Liburan dan Makan Bareng Mega Libur Lebaran - Diskon s/d 50%",
    promo_area: "Semarang, Yogyakarta",
    promo_period: "31 Mei 2019 - 30 April 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/5/20190531114145.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/5/LEBARANseru-SEMARANG-YOGYA.jpg",
    description: "",
    expired: false,
    category: "food"
  },
  {
    title: "Makan Bareng Mega Libur Lebaran - Diskon s/d 50%",
    promo_area: "Kalimantan",
    promo_period: "31 Mei 2019 - 30 Maret 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/6/20190531143857.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/food/6/LEBARANseru-KLIMANTAN.jpg",
    description: "",
    expired: false,
    category: "food"
  },
]

// gadget
const gadgetData = [
  // {
  //   title: "Free Access to Airport Lounge (Lounge Key) with Mega Travel Card",
  //   promo_area: "Jadetabek, Bandung, Surabaya",
  //   promo_period: "01 Mei 2019 - 31 Desember 2019",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
  // {
  //   title: "Mega Executive Lounge dan The Coffee Bean & Tea Leaf Lounge dengan 1000 Mega Reward Point",
  //   promo_area: "Nasional",
  //   promo_period: "01 Agustus 2018 - 01 Agustus 2030",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
  // {
  //   title: "XXI Promo with VISA Contactless - Buy 1 Get 1 Free Ticket + 1 Free Popcorn + 1 Free Softdrink",
  //   promo_area: "Nasional",
  //   promo_period: "01 Juli 2019 - 30 September 2019",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
  // {
  //   title: "Antavaya - Royal Carribean & Celebrity Cruises Expo",
  //   promo_area: "Nasional",
  //   promo_period: "12 Agustus 2019 - 18 Agustus 2019",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
  // {
  //   title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
  //   promo_area: "Jakarta",
  //   promo_period: "01 April 2019 - 31 Maret 2020",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
  // {
  //   title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
  //   promo_area: "Bali",
  //   promo_period: "01 April 2019 - 31 Maret 2020",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "gadget"
  // },
]

// daily needs
const dailyNeedData = [
  {
    title: "Belanja puas, Tap aja - diskon 10% + gratis sabun cuci piring",
    promo_area: "Nasional",
    promo_period: "26 Juni 2019 - 30 September 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/daily-needs/1/20190709142323.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/daily-needs/1/02-landing-page-TRANSMART.jpg",
    description: "",
    expired: false,
    category: "daily_need"
  },
  // {
  //   title: "Mega Executive Lounge dan The Coffee Bean & Tea Leaf Lounge dengan 1000 Mega Reward Point",
  //   promo_area: "Nasional",
  //   promo_period: "01 Agustus 2018 - 01 Agustus 2030",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "daily_need"
  // },
  // {
  //   title: "XXI Promo with VISA Contactless - Buy 1 Get 1 Free Ticket + 1 Free Popcorn + 1 Free Softdrink",
  //   promo_area: "Nasional",
  //   promo_period: "01 Juli 2019 - 30 September 2019",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "daily_need"
  // },
  // {
  //   title: "Antavaya - Royal Carribean & Celebrity Cruises Expo",
  //   promo_area: "Nasional",
  //   promo_period: "12 Agustus 2019 - 18 Agustus 2019",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "daily_need"
  // },
  // {
  //   title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
  //   promo_area: "Jakarta",
  //   promo_period: "01 April 2019 - 31 Maret 2020",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "daily_need"
  // },
  // {
  //   title: "MegaFirst Liburan & Makan AGUSTUSAN Bareng Mega - Diskon hingga 30%",
  //   promo_area: "Bali",
  //   promo_period: "01 April 2019 - 31 Maret 2020",
  //   image: "",
  //   image_detail: "",
  //   description: "",
  //   card_picts: "",
  //   expired: false,
  //   category: "daily_need"
  // },
]

// etc
const other = [
  {
    title: "Mega Reward Point",
    promo_area: "Nasional",
    promo_period: "24 Januari 2019 - 30 Januari 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/1/20190124173059.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/1/MEGAREWARD-LP-Update+04+MAR+19-revRainy.jpg",
    description: "",
    expired: false,
    category: "other"
  },
  {
    title: "Aktivasi Kartu Kredit Bank Mega",
    promo_area: "Nasional",
    promo_period: "30 Mei 2017 - 30 Mei 2028",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/2/20170530212605.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/2/AKTIVASI-CC-lp-CS5.jpg",
    description: "",
    expired: false,
    category: "other"
  },
  {
    title: "Launching Transmart Mega Card",
    promo_area: "Nasional",
    promo_period: "14 Maret 2019 - 31 Desember 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/3/20190313181745.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/3/Transmart-sosmed-lp3.jpg",
    description: "",
    expired: false,
    category: "other"
  },
  {
    title: "Mega Travel Card - Forex",
    promo_area: "Nasional",
    promo_period: "27 Mei 2019 - 31 Desember 2019",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/4/20190531145242.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/4/forex-lp+revisi+aya-rev01.jpg",
    description: "",
    expired: false,
    category: "other"
  },
  {
    title: "Mega Reward Point Redeem to M-Tix Voucher",
    promo_area: "Nasional",
    promo_period: "01 Maret 2019 - 01 April 2020",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/5/20190801210013.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/5/MTIX-LP-Rev(1).jpg",
    description: "",
    expired: false,
    category: "other"
  },
  {
    title: "FOREX Special Rate Mega Travel Card",
    promo_area: "Nasional",
    promo_period: "09 Desember 2016 - 31 Desember 2026",
    image: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/6/20190509163626.jpg",
    image_detail: "https://cermati-temporary.s3-ap-southeast-1.amazonaws.com/promo/pict/other/6/FOREXmtc-lp.jpg",
    description: "",
    expired: false,
    category: "other"
  },
]

for (let i in travelData) {
  console.log(`==== travelData[i]`, travelData[i])
  PromoCategory.create(travelData[i])
    .then((response) => {
      response,
      console.log(`=== travelData has been saved`, response)
    })
    .catch((err) => {
      err,
      console.log(`=== travelData can't be saved`, err)
    })
}

for (let i in lifestyleData) {
  PromoCategory.create(lifestyleData[i])
  .then((response) => {
    response,
    console.log(`=== lifeStyle has been saved`, response)
  })
  .catch((err) => {
    err,
    console.log(`=== lifeStyle can't be saved`, err)
  })
}

for (let i in foodData) {
  PromoCategory.create(foodData[i])
  .then((response) => {
    response,
    console.log(`=== foodData has been saved`, response)
  })
  .catch((err) => {
    err,
    console.log(`=== foodData can't be saved`, err)
  })
}

for (let i in gadgetData) {
  PromoCategory.create(gadgetData[i])
  .then((response) => {
    response,
    console.log(`=== gadgetData has been saved`, response)
  })
  .catch((err) => {
    err,
    console.log(`=== gadgetData can't be saved`, err)
  })
}

for (let i in dailyNeedData) {
  PromoCategory.create(dailyNeedData[i])
  .then((response) => {
    response,
    console.log(`=== dailyNeedData has been saved`, response)
  })
  .catch((err) => {
    err,
    console.log(`=== dailyNeedData can't be saved`, err)
  })
}

for (let i in other) {
  PromoCategory.create(other[i])
  .then((response) => {
    response,
    console.log(`=== otherData has been saved`, response)
  })
  .catch((err) => {
    err,
    console.log(`=== otherData can't be saved`, err)
  })
}