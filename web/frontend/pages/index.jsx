import {
  Page
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import HomeIndex from "../sections/Home/HomeIndex";


export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
    <HomeIndex/>
     
     
    </>
  );
}
