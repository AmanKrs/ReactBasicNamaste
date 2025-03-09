import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const mcDonald = {
  name: "McDonald's",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9c9ca5f0-b219-46b5-bbba-ea2594524624_804248.JPG",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

const restuarantList = [
  {
    info: {
      id: "407661",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/78b9ac28-fe33-440a-9a98-72ab8020534d_407661.jpg",
      locality: "New Market",
      areaName: "Esplanade",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "2.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/burger-king-new-market-esplanade-rest407661",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "651011",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/d0fc03a3-02d7-45b4-b733-4de64d19d3a9_651011.jpg",
      locality: "New Market",
      areaName: "Esplanade",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/pizza-hut-new-market-esplanade-rest651011",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "341240",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "tx4nkcrymnxl4skumwm9",
      locality: "Central Kolkata",
      areaName: "Park Street Area",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/la-pinoz-pizza-central-park-street-area-rest341240",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "565580",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d2e6497c-c00e-47ce-8fcb-e0e3617a9d7b_565580.JPG",
      locality: "Sealdah",
      areaName: "Esplanade",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Burgers", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "977",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/kfc-sealdah-esplanade-rest565580",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "34785",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/ca4404ea-d968-445b-b62e-757020158a5c_34785.JPG",
      locality: "Allenby Road",
      areaName: "Central Kolkata",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.7,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.7",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/the-belgian-waffle-co-allenby-road-central-kolkata-rest34785",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8912",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/7d7000b3-e78a-4dda-b345-1f6d37307a4b_8912.JPG",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 07:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Sandwich.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Green%20Dot%20Awards/Best%20In%20Veg%20Sandwich.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/subway-park-street-rest8912",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "324200",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/0dd0235c-6bb1-4321-9e2c-a3b13d0bbc3c_324200.JPG",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "21809",
      avgRatingString: "4.4",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/faasos-wraps-rolls-and-shawarma-dr-suresh-chandra-banerjee-road-beleghata-rest324200",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "837987",
      name: "The Pizza Project by Oven Story",
      cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "497031",
      avgRatingString: "4.5",
      totalRatingsString: "134",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/the-pizza-project-by-oven-story-dr-suresh-chandra-banerjee-road-beleghata-rest837987",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "801427",
      name: "Makhani Darbar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/85b45371-42ec-4c14-827f-6b99f65b7ef8_801427.JPG",
      locality: "Baliaghata",
      areaName: "DR SURESH CHANDRA BANERJEE ROAD",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "478595",
      avgRatingString: "4.3",
      totalRatingsString: "74",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/makhani-darbar-baliaghata-dr-suresh-chandra-banerjee-road-rest801427",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566472",
      name: "Faasos' Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      parentId: "340366",
      avgRatingString: "4.5",
      totalRatingsString: "194",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/faasos-signature-wraps-and-rolls-dr-suresh-chandra-banerjee-road-beleghata-rest566472",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "575212",
      name: "Veg Daawat by Behrouz",
      cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹700 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "344904",
      avgRatingString: "4.4",
      totalRatingsString: "94",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹229",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/veg-daawat-by-behrouz-dr-suresh-chandra-banerjee-road-beleghata-rest575212",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3071",
      name: "Jai Hind Dhaba",
      cloudinaryImageId: "cdbdjcego1vt4reojqiy",
      locality: "Bhawanipur",
      areaName: "South Kolkata",
      costForTwo: "₹500 for two",
      cuisines: [
        "North Indian",
        "Indian",
        "Tandoor",
        "Kebabs",
        "Punjabi",
        "Home Food",
        "Chinese",
      ],
      avgRating: 4.6,
      parentId: "1928",
      avgRatingString: "4.6",
      totalRatingsString: "151K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "16K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/jai-hind-dhaba-bhawanipur-south-kolkata-rest3071",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "362307",
      name: "Veg Meals by Lunchbox",
      cloudinaryImageId: "xjkkxyxldxnaxh0mzri1",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.5",
      totalRatingsString: "491",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/veg-meals-by-lunchbox-dr-suresh-chandra-banerjee-road-beleghata-rest362307",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "831408",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId: "80ca62f0de020f8cbe39fd034d3325d5",
      locality: "New Market",
      areaName: "Esplanade Kolkata",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.5,
      parentId: "306806",
      avgRatingString: "3.5",
      totalRatingsString: "53",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/pastas-by-pizza-hut-new-market-esplanade-kolkata-rest831408",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "19935",
      name: "Tea Junction",
      cloudinaryImageId: "77d2fffe27cd59af5045a102d08af522",
      locality: "BNWCC Hospital",
      areaName: "Park Street Area",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      avgRating: 4.3,
      parentId: "4311",
      avgRatingString: "4.3",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/tea-junction-bnwcc-hospital-park-street-area-rest19935",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "26533",
      name: "6 Ballygunge Place Takeaway",
      cloudinaryImageId: "agpdyb3uwlik0r47be6o",
      locality: "Near Mahadevi Birla Shishu Vihar",
      areaName: "Central Kolkata",
      costForTwo: "₹800 for two",
      cuisines: ["Bengali"],
      avgRating: 4.6,
      parentId: "553778",
      avgRatingString: "4.6",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 03:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Bengali.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Bengali.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/6-ballygunge-place-takeaway-near-mahadevi-birla-shishu-vihar-central-kolkata-rest26533",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "432094",
      name: "Keventers Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/8/c152604e-86db-448c-b30d-774dde47091e_432094.jpg",
      locality: "New Empire Cinema, Kolkata",
      areaName: "New Empire Cinema",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "272044",
      avgRatingString: "4.6",
      totalRatingsString: "694",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Vegan.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Vegan.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/keventers-ice-cream-new-empire-cinema-rest432094",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834096",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/7/583893bc-b370-4539-8202-1485bc64cbf6_834096.jpg",
      locality: "KOLKATA MUNICIPAL CORPORATION",
      areaName: "RASH BEHARI AVENUE",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
      ],
      avgRating: 4.7,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.7",
      totalRatingsString: "410",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹64",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/the-dessert-heaven-pastry-brownie-and-cakes-municipal-corporation-rash-behari-avenue-rest834096",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834825",
      name: "ENSO - Sourdough Pizza by Nomad",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/cc4d2036-2b63-4554-a55f-930670db393b_834825.jpg",
      locality: "Central Kolkata",
      areaName: "Ballygung",
      costForTwo: "₹850 for two",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Salads", "Beverages"],
      avgRating: 4.3,
      parentId: "77344",
      avgRatingString: "4.3",
      totalRatingsString: "400",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹299",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/enso-sourdough-pizza-by-nomad-central-ballygung-rest834825",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "834808",
      name: "Nomad Pizza - Traveller Series",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c013d20e-23fe-4a11-8145-6351d4a7ff00_834808.jpg",
      locality: "Central Kolkata",
      areaName: "Ballygung",
      costForTwo: "₹850 for two",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "251919",
      avgRatingString: "4.3",
      totalRatingsString: "358",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹295",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-204b2850-ae08-4528-8816-1885b35e23a4",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/nomad-pizza-traveller-series-central-ballygung-rest834808",
      type: "WEBLINK",
    },
  },
];

const RestuarantCard = (props) => {
  const { restuarantInfo } = props; //destructing data from props passes through body component
  return (
    <>
      <div className="card">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restuarantInfo.cloudinaryImageId}`}
          alt="resImg"
        />
        <div className="cardInfo">
          <h3>{restuarantInfo.name}</h3>
          <h4>{restuarantInfo.cuisines.join(", ")}</h4>
          <p>{restuarantInfo.avgRating} ⭐</p>
        </div>
      </div>
    </>
  );
};
const Title = () => (
  <h1 id="title" key="qw12">
    FoodAPP
  </h1>
);

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <Title />
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Body = () => (
  <>
  <div className="res-list">
     <RestuarantCard restuarantInfo={restuarantList[0].info} />
    <RestuarantCard restuarantInfo={restuarantList[1].info} />
    <RestuarantCard restuarantInfo={restuarantList[2].info} />
  </div>
   
  </>
);
const Footer = () => <h1>Footer</h1>;

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
