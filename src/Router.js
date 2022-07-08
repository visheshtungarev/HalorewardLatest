import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Layout/Footer/index";
import AllBrands from "./pages/AllBrands/AllBrands";
import AllPopularOffers from "./pages/PopularOffers/AllPopularOffers";
import Header from "./components/Layout/Header";
import AllOffers from "./pages/AllOffers/AllOffers";
import BrandCategory from "./pages/Brand/BrandCategory";
import BrandDetails from "./pages/OfferListing/BrandDetails";
import Coupon from "./pages/Coupon/Coupon";
import Cashback from "./pages/Cashback/Cashback";
import PrizeDraw from "./pages/PrizeDraw/PrizeDraw";
import OnCardoffer from "./pages/OnCardOffer/OnCardOffer";
import About from "./pages/About/About";
import Saved from "./pages/Saved/Saved";
import SavedCoupon from "./pages/Saved/SavedCoupon/SavedCoupon";
import FavoriteBrands from "./pages/Saved/FavoriteBrands/FavoriteBrands";
import SavedPrizeDraws from "./pages/Saved/SavedPrizeDraws/SavedPrizeDraws";
import PickingFavoriteBrand from "./pages/Saved/FavoriteBrands/PickingFavoriteBrand";
import LoginPage from "./components/Auth/LoginPage";
import OfferSearch from "./pages/AllOffers/OfferSearch";
import PickingFavoriteProduct from "./pages/Saved/FavouriteProduct/PickingFavouriteProduct";
import Account from "./pages/Account/Account Profile/Account";
import AccountWallet from "./pages/Account/Account Wallet/AccountWallet";
import CashBackActivity from "./pages/Account/Cashback Activity/CashbackActivity";
import WalletStatement from "./pages/Account/Wallet Statement/WalletStatement";
import AccpountClaims from "./pages/Account/Account Claims/AccountClaims";
import AccountPersonalize from "./pages/Account/Account Personalize/AccountPersonlize";
import Help from "./pages/Account/Help/Help";
import EarnCash from "./pages/Account/EarnCash/EarnCash";
import BrandList from "./pages/CommonBrand/BrandList";

const RouterApp = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-offers" element={<AllPopularOffers />} />
        <Route path="/all-offers" element={<AllOffers />} />
        <Route path="/search-offers/:id" element={<OfferSearch />} />
        <Route path="/all-brands/category" element={<BrandCategory />} />
        <Route path="/list" element={<BrandList />} />
        <Route path="/brand" element={<BrandDetails />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/prizedraw" element={<PrizeDraw />} />
        <Route path="/oncardOffer" element={<OnCardoffer />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/saved/saved-coupon" element={<SavedCoupon />} />
        <Route path="/saved/saved-cashback" element={<SavedCoupon />} />
        <Route path="/saved/saved-prizedraw" element={<SavedCoupon />} />
        <Route path="/saved/favorite-brand" element={<FavoriteBrands />} />
        <Route path="/saved/prize-draws" element={<SavedPrizeDraws />} />
        <Route
          path="/saved/picking-favorite-brand"
          element={<PickingFavoriteBrand />}
        />{" "}
        <Route
          path="/saved/picking-favorite-product"
          element={<PickingFavoriteProduct />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account-profile" element={<Account />} />
        <Route path="/wallet" element={<AccountWallet />} />
        <Route path="/cashback-activity" element={<CashBackActivity />} />
        <Route path="/wallet-statement" element={<WalletStatement />} />
        <Route path="/claims" element={<AccpountClaims />} />
        <Route path="/personalized" element={<AccountPersonalize />} />
        <Route path="/Help-Support" element={<Help />} />
        <Route path="/earn-cash" element={<EarnCash />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default RouterApp;
