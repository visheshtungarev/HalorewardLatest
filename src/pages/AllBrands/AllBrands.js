import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { Col, Row, Card, Select } from "antd";
// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import env from "../../enviroment";
import { RightOutlined } from "@ant-design/icons";
import {
  CreditCardOutlined,
  // ShopOutlined,
  // ShoppingOutlined
} from "@ant-design/icons";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import SideBar from "../../components/Sidebar/SideBar";
import { Post_call } from "../../network/networkmanager";
import { useDispatch, useSelector } from "react-redux";
import { resetMerchantAction } from "../../actions/brandAction";
import { singleConstant } from "../../Constants/HomeConstant";
import { getCategoryAction } from "../../actions/CategoryAction";
// import { brandListAction } from "../../actions/brandAction";
// import actions from "../../actions";
// import { render } from "@testing-library/react";
// const { Meta } = Card;

const sidebarData = [
  {
    categoryId: 1,
    name: "Accessories",
    description: "Accessories",
    status: "Active",
  },
  {
    categoryId: 2,
    name: "Auto & Tires",
    description: "Auto & Tires",
    status: "Active",
  },
  {
    categoryId: 3,
    name: "Baby & Kids Wear",
    description: "Baby & Kids Wear",
    status: "Active",
  },
  {
    categoryId: 4,
    name: "Books & Media",
    description: "Books & Media",
    status: "Active",
  },
  {
    categoryId: 5,
    name: "Clothing",
    description: "Clothing",
    status: "Active",
  },
  {
    categoryId: 6,
    name: "Electronics",
    description: "Electronics",
    status: "Active",
  },
  {
    categoryId: 7,
    name: "Events & Activities",
    description: "Events & Activities",
    status: "Active",
  },
  {
    categoryId: 8,
    name: "Flowers & Florists",
    description: "Flowers & Florists",
    status: "Active",
  },
  {
    categoryId: 9,
    name: "Food & Restaurants",
    description: "Food & Restaurants",
    status: "Active",
  },
  {
    categoryId: 10,
    name: "Gifts & Occassions",
    description: "Gifts & Occassions",
    status: "Active",
  },
  {
    categoryId: 11,
    name: "Health & Beauty",
    description: "Health & Beauty",
    status: "Active",
  },
  {
    categoryId: 12,
    name: "Home",
    description: "Home",
    status: "Active",
  },
  {
    categoryId: 13,
    name: "Home Appliances",
    description: "Home Appliances",
    status: "Active",
  },
  {
    categoryId: 14,
    name: "Office Supplies",
    description: "Office Supplies",
    status: "Active",
  },
  {
    categoryId: 15,
    name: "Pet Supplies",
    description: "Pet Supplies",
    status: "Active",
  },
  {
    categoryId: 16,
    name: "Shoes & Handbags",
    description: "Shoes & Handbags",
    status: "Active",
  },
];

const allTredingBrandsTwo = [
  {
    merchantId: 1,
    merchantRank: 1,
    merchantName: "Nike",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 3,
        name: "Baby & Kids Wear",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
      {
        categoryId: 10,
        name: "Gifts & Occassions",
      },
      {
        categoryId: 16,
        name: "Shoes & Handbags",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 4,
      },
      {
        name: "Cashbacks",
        size: 4,
      },
      {
        name: "Coupons",
        size: 4,
      },
    ],
  },
  {
    merchantId: 2,
    merchantRank: 2,
    merchantName: "Myntra",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 1,
        name: "Accessories",
      },
      {
        categoryId: 12,
        name: "Home",
      },
      {
        categoryId: 13,
        name: "Home Appliances",
      },
      {
        categoryId: 15,
        name: "Pet Supplies",
      },
      {
        categoryId: 3,
        name: "Baby & Kids Wear",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
      {
        categoryId: 16,
        name: "Shoes & Handbags",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 5,
      },
      {
        name: "Cashbacks",
        size: 4,
      },
      {
        name: "Coupons",
        size: 3,
      },
    ],
  },
  {
    merchantId: 3,
    merchantRank: 3,
    merchantName: "Marks & Spencers",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 4,
        name: "Books & Media",
      },
      {
        categoryId: 1,
        name: "Accessories",
      },
      {
        categoryId: 12,
        name: "Home",
      },
      {
        categoryId: 13,
        name: "Home Appliances",
      },
      {
        categoryId: 3,
        name: "Baby & Kids Wear",
      },
      {
        categoryId: 6,
        name: "Electronics",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 3,
      },
      {
        name: "Cashbacks",
        size: 4,
      },
      {
        name: "Coupons",
        size: 5,
      },
    ],
  },
  {
    merchantId: 4,
    merchantRank: 4,
    merchantName: "Nykaa",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 1,
        name: "Accessories",
      },
      {
        categoryId: 3,
        name: "Baby & Kids Wear",
      },
      {
        categoryId: 6,
        name: "Electronics",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 4,
      },
      {
        name: "Cashbacks",
        size: 5,
      },
      {
        name: "Coupons",
        size: 4,
      },
    ],
  },
  {
    merchantId: 5,
    merchantRank: 5,
    merchantName: "Target",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 4,
        name: "Books & Media",
      },
      {
        categoryId: 7,
        name: "Events & Activities",
      },
      {
        categoryId: 1,
        name: "Accessories",
      },
      {
        categoryId: 2,
        name: "Auto & Tires",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
      {
        categoryId: 9,
        name: "Food & Restaurants",
      },
      {
        categoryId: 11,
        name: "Health & Beauty",
      },
      {
        categoryId: 8,
        name: "Flowers & Florists",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 1,
      },
      {
        name: "Cashbacks",
        size: 5,
      },
      {
        name: "Coupons",
        size: 3,
      },
    ],
  },
  {
    merchantId: 6,
    merchantRank: 6,
    merchantName: "Dell",
    status: "Active",
    onCard: false,
    provider: "DX United",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 7,
        name: "Events & Activities",
      },
      {
        categoryId: 6,
        name: "Electronics",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 3,
      },
      {
        name: "Cashbacks",
        size: 4,
      },
      {
        name: "Coupons",
        size: 2,
      },
    ],
  },
  {
    merchantId: 7,
    merchantRank: 7,
    merchantName: "Flipkart",
    status: "Active",
    onCard: false,
    provider: "Manual",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 4,
        name: "Books & Media",
      },
      {
        categoryId: 7,
        name: "Events & Activities",
      },
      {
        categoryId: 1,
        name: "Accessories",
      },
      {
        categoryId: 2,
        name: "Auto & Tires",
      },
      {
        categoryId: 3,
        name: "Baby & Kids Wear",
      },
      {
        categoryId: 6,
        name: "Electronics",
      },
      {
        categoryId: 5,
        name: "Clothing",
      },
      {
        categoryId: 8,
        name: "Flowers & Florists",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 2,
      },
      {
        name: "Cashbacks",
        size: 3,
      },
      {
        name: "Coupons",
        size: 3,
      },
    ],
  },
  {
    merchantId: 8,
    merchantRank: 8,
    merchantName: "GAP",
    status: "Active",
    onCard: false,
    provider: "Manual",
    modifiedDate: "2022-05-31 08:07:17.16864",
    customerRebate: "2.5%",
    merchantLogo1:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAp1JREFUeNqEU21IU1EYfu7unW5Ty6aBszYs6MeUjGVYokHYyH5E1B9rZWFEFPQnAwmy6Hc/oqhfJsRKSSZGH1JIIX3MNCsqLTD9o1Oj6ebnnDfvvefezrnbdCHhCw/n433P8z7nPe/hBEEAtX0U7hc164uwuvVSXKwZLoOmaRDim+7m9vZa0WiEKSUFFpNpCWlmMyypqTDRuYn6t3k8vmQ2gRDCxs0t9fW45F52aBTROJLtZl7nEZad2m+KtoQCQ0FBARyOCGRZ/q92I1WgqqXlfdd95VsrK8/pChIEqqpCkiQsiCII0aBQZZoWl8lzFDwsFjMl0DBLY8Lj41hBwK4jSQrWOIphL6xYyhwJDWGo6wFSaH1Y3PTCAsITE1oyAa8flhWkbSiCLX8vun11eiGIpiJ/z2nYdx5HqLdVV7elrOzsuqysL3rmBIGiKPizKCHHWY4PLVeQbnXAdegqdhy+hu8dDTBnbqQJZJ1A7u+vz7RaiymWCZgCRSF6Edk8b9cx+B/W6WuVxPaZnyiqXoPpyUmVYvkKTIFClHigEieKjYuSvETUllaF4GAUM1NT6ooaJDKx+aDfC9fByxj90REb+9ppmIoAscH/6leg8MS9DJXPAM9xHCM443K57C6biMjcHDaVVCHw9RmCA2/RGC5C00AqXk/m4p20HZK4CM/J3Zk9n0ecMBhDQnJHcrTisyMfdQXOilrdMfxcwoHq/fg5R59TiQV3hYGKo6X2J/c7LyQIjOx9GXhOw/zoJ8wEevRGyp53o/lGMNYsBgPtEwLecwov7/jGDKa1twT6o3KpL4MdZgGsWZLtfPr7f1q58k1JNHy7YYaM+J+K3Y2PmAIbRavX66229hrGVvvL5uzsHDEUvUu+NT1my78CDAAMK1a8/QaZCgAAAABJRU5ErkJggg",
    merchantUrl: "http://www.cafecoffeeday.com",
    categories: [
      {
        categoryId: 12,
        name: "Home",
      },
      {
        categoryId: 13,
        name: "Home Appliances",
      },
      {
        categoryId: 15,
        name: "Pet Supplies",
      },
      {
        categoryId: 14,
        name: "Office Supplies",
      },
      {
        categoryId: 10,
        name: "Gifts & Occassions",
      },
      {
        categoryId: 9,
        name: "Food & Restaurants",
      },
      {
        categoryId: 11,
        name: "Health & Beauty",
      },
      {
        categoryId: 8,
        name: "Flowers & Florists",
      },
    ],
    contentTypes: [
      {
        name: "Prize Draws",
        size: 2,
      },
      {
        name: "Cashbacks",
        size: 4,
      },
      {
        name: "Coupons",
        size: 3,
      },
    ],
  },
];

const allTredingBrands = [
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
];
const values = env();
const { getCategoriesByClientID } = values;

const AllBrands = () => {
  const { Option } = Select;
  const getMerachandData = useSelector((state) => state.auth?.all_brand);
  console.log("getMerachandData ....", getMerachandData);
  console.log(sidebarData, allTredingBrandsTwo);
  const [dataArr] = useState(allTredingBrands);
  console.log("dataArr", dataArr);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  // const [brandBoolean, setBrandBoolean] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [merchantList, setMerchantList] = useState([]);
  const [trendingCarousel, setTrendingCarousel] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  let categoryId = state?.id;

  const closeSidebar = () => {
    !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false);
  };

  console.log("merchantList", merchantList);

  const carouselState = useSelector((state) => state.auth.carousel);

  useEffect(() => {
    getCarouseItem();
  }, [carouselState]);

  const getCarouseItem = () => {
    if (carouselState && carouselState.length >= 0) {
      let trendingArray = [];
      carouselState[0]?.carousels.map((element) => {
        if (element.carouselName === singleConstant.trending_brand) {
          return trendingArray.push(element);
        }
      });
      setTrendingCarousel(trendingArray);
    }
  };

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
    dispatch(getCategoryAction);
    // getCategoryList();
    getBrandList(categoryId || null);
    setMerchantList(getMerachandData);
  }, []);

  useEffect(() => {
    getBrandList(categoryId || null);
  }, [getMerachandData, categoryId]);

  const categorylist = useSelector((state) => state.auth.all_category);

  useEffect(() => {
    let objCategory = [{ name: "All" }];
    categorylist?.data &&
      categorylist?.data.length > 0 &&
      categorylist.data.map((item) => {
        if (categoryId) {
          if (categoryId === item.categoryId) {
            item["isActive"] = true;
            return objCategory.push(item);
          } else {
            item["isActive"] = false;
            return objCategory.push(item);
          }
        } else {
          item["isActive"] = false;
          return objCategory.push(item);
        }
      });
    console.log("objCategory ....", objCategory);
    setCategoryData(objCategory);
  }, [categoryId]);

  const getBrandList = async (value) => {
    var raw =
      "{\n    brands(siteId: 1) {\n        merchantId\n        merchantRank\n        merchantName\n        merchantDescription\n        status\n        onCard\n        provider\n        modifiedDate\n        customerRebate\n        merchantLogo1\n        merchantUrl\n        categories {\n            categoryId\n            name\n        }\n        contentTypes {\n            name\n            size\n        }\n    }\n}\n";
    try {
      let response = await Post_call(
        `${getCategoriesByClientID}/clients/1/brands`,
        raw,
        false
      );
      if (response.status === 200) {
        // setBrandBoolean(true)
        let filterarray = [];
        if (value) {
          response?.data?.forEach((val) => {
            val.categories.filter((itm) => {
              if (itm.categoryId === value) {
                filterarray.push(val);
              }
            });
          });
        }
        filterarray && filterarray.length > 0
          ? setBrandData(filterarray)
          : setBrandData(response.data);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // const getCategoryList = async () => {
  //   var data =
  //     "{\n    categories(siteId: 1)  {\n        categoryId\n        name\n        description\n        status\n    }\n}";

  //   try {
  //     let response = await Post_call(
  //       `${getCategoriesByClientID}/clients/1/categories`,
  //       data,
  //       false
  //     );
  //     if (response.status === 200) {
  //       let objCategory = [{ name: "All" }];
  //       response?.data?.map((item) => {
  //         return objCategory.push(item);
  //       });
  //       setCategoryData(objCategory);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  const filterHandler = (key, val) => {
    navigate(`/all-brands?category=${val}`, {
      state: {
        id: key,
      },
    });
    // let array = [...categoryData];
    // array.filter((item) => {
    //   if (item.categoryId === key) {
    //     item.isActive = true;
    //   } else {
    //     item.isActive = false;
    //   }
    // });
    // setCategoryData(array);
    // // setMerchantList([])
    dispatch(resetMerchantAction);
    // getBrandList(key);

    // dispatch(brandListAction(key))
  };

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[
            {
              pageName: "Categories",
              pageLink: "/categories",
            },
            {
              pageName: "All Brands",
              pageLink: "/all-brands",
            },
          ]}
        />
      </Row>

      <div className="list_view">
        {/* <Heading
          HeadingText="Trending Brands"
          actionText="View All"
          actionLink="/brand-list"
          type={"trending-brand"}
        /> */}
        <Row
          className="headingFancy mt-md-4"
          align="middle"
          justify="space-between"
        >
          <Col className="list_title">Trending Brands</Col>

          <Col className="list_action">
            <Link
              className="d-flex align-items-center"
              to="/list?=trending-brand"
              state={{ type: "trending-brand" }}
            >
              View All
              <RightOutlined />
            </Link>
          </Col>
        </Row>
        <Row
          align="middle"
          className="scrolledView"
          justify="space-around"
          gutter={20}
        >
          {trendingCarousel &&
            trendingCarousel.length &&
            trendingCarousel[0].brands &&
            trendingCarousel[0].brands.length > 0 &&
            trendingCarousel[0].brands.map((item, i) => (
              <Col key={i} className="deals_box trending_brands mb-3 " span={4}>
                <Link
                  to={`/brand?id=${item.merchantId}`}
                  state={{
                    totalCashback: item?.customerRebate,
                    description: trendingCarousel[0]?.description,
                    ids: item?.merchantId,
                    isCard: item?.onCard,
                  }}
                >
                  <Card className="deals_container">
                    {/* <Badge
                    position={"mx-auto"}
                    badgeType={"oncard"}
                    badgeText={"ON CARD"}
                    badgeIcon={"ON CARD"}
                  /> */}
                    <>
                      <img
                        className="dealicon "
                        src={`data:image/png;base64,${item.merchantLogo1}`}
                      />
                      <p
                        className="deals_title text-center"
                        style={{ minHeight: "auto" }}
                      >
                        {item.merchantName}
                      </p>
                    </>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>

      <div className="list_view">
        {/* {getMerachandData && getMerachandData.length > 0 && (
          <div className="list_title">{getMerachandData.length} </div>
        )} */}
        <Heading
          HeadingText="Brands"
          filter={
            <>
              <button onClick={() => closeSidebar()} className="filterBtn">
                Filter
              </button>
              <Select defaultValue="Any Reward Type" allowClear>
                <Option value="AnyRewardType">Any Reward Type</Option>
              </Select>
              <Select defaultValue="Popular" allowClear>
                <Option value="Popular">Popular</Option>
              </Select>
            </>
          }
          // getMerachandData={getMerachandData}
        />

        <Row justify="space-around" gutter={20}>
          <Col span={24} lg={{ span: 6 }}>
            {openSidePanel ? (
              <SideBar
                closePanel={() => closeSidebar()}
                type="list"
                mainTitle="Filter"
                data={categoryData}
                filterPanel={(k, e) => filterHandler(k, e)}
              />
            ) : (
              ""
            )}
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <Row align="middle" justify="space-around">
              {Array.isArray(brandData) &&
                brandData.length > 0 &&
                brandData.map((item, i) => {
                  return (
                    <Col
                      key={i}
                      className="  overflow-hidden featuredOffers mb-4"
                      span={24}
                    >
                      <Link
                        to={`/brand?id=${item.merchantId}`}
                        state={{
                          totalCashback: item.customerRebate,
                          description: item.merchantDescription,
                          ids: item.merchantId,
                          isCard: item.onCard,
                        }}
                      >
                        <Card className="deals_container popularOffers rounded1">
                          <Row align="middle" className="w-100 flex-nowrap">
                            <div>
                              <img
                                className="dealicon_img_frame"
                                // src="/Images/logo.png"
                                src={`data:image/png;base64,${item.merchantLogo1}`}
                              />
                            </div>
                            <Col className="flex-grow-1">
                              <Row align="middle" justify="around">
                                <Col
                                  span={24}
                                  md={{ span: 6 }}
                                  className="d-flex align-items-center"
                                >
                                  <p className="deals_title ml-3 my-0">
                                    {item.merchantName}
                                  </p>
                                </Col>
                                <Col
                                  span={24}
                                  md={{ span: 18 }}
                                  className="flex-grow-1"
                                >
                                  <p className="deals_content ml-3 mb-0">
                                    {item?.contentTypes.map((val) => {
                                      if (val.name === "Cashbacks") {
                                        return (
                                          <span>
                                            {"Upto " +
                                              val.size +
                                              "%" +
                                              " " +
                                              val.name}
                                            ,{" "}
                                          </span>
                                        );
                                      } else {
                                        return (
                                          <span>
                                            {val.size + " " + val.name},{" "}
                                          </span>
                                        );
                                      }
                                    })}
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                            {item.onCard && (
                              <div className="fixed-top-right">
                                <Badge
                                  position={""}
                                  badgeType={item?.modeType}
                                  badgeText={item?.modeText}
                                  badgeIcon={item.modeIcon}
                                />
                              </div>
                            )}
                          </Row>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AllBrands;
