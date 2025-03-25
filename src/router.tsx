import { RouteObject, useRoutes } from "react-router-dom";
import { lazy } from "react";
import CompanyInfo from "./pages/center/CompanyInfo.tsx";
import Partners from "./pages/partners/Partners.tsx";
import AboutCenterNews from "./pages/news/helper.tsx";
import NewsList from "./pages/news/NewsList.tsx";
import NewsViewPage from "./pages/news/NewsView.tsx";
import ArticleList from "./pages/news/ArticleList.tsx";
import AboutCenterDocument from "./pages/document/helper.tsx";
import DocumentList from "./pages/document/Document.tsx";
import DocumentView from "./pages/document/DocumentView.tsx";
import LawDocumentList from "./pages/document/LawDocument.tsx";
import DecisionDocumentList from "./pages/document/DecisionDocument.tsx";
import OtherDocumentList from "./pages/document/OtherDocument.tsx";
import AboutCenterService from "./pages/service/helper.tsx";
import ServiceList from "./pages/service/ServiceList.tsx";
import ServiceViewPage from "./pages/service/ServiceView.tsx";
import OrderFormPage from "./pages/service/OrderFrom.tsx";
import AboutCenterRecom from "./pages/recomendation/helper.tsx";
import RecommendationList from "./pages/recomendation/Recomendation.tsx";
import RecommendationViewPage from "./pages/recomendation/RecomendationView.tsx";
import PersonalRecommendationList from "./pages/recomendation/PerRecomendation.tsx";
import EducationRecommendationList from "./pages/recomendation/EduRecomendation.tsx";
import ProfessionalRecommendationList from "./pages/recomendation/ProRecomendation.tsx";
import ContactInfo from "./pages/contact/Contact.tsx";
import ActionFormPage from "./pages/action/Action.tsx";
import VacanciesForm from "./pages/vacancies/VacanciesForm.tsx";
import StandartDocumentList from "./pages/document/StandartDocument.tsx";
import StaffDetailPage from "./pages/section/SectionView.tsx";
const HomePage = lazy(() => import("./pages/home/Home"));
const AboutCenter = lazy(() => import("./pages/center/AboutCenter"));
const Management = lazy(() => import("./pages/managemant/Management.tsx"));
const Section = lazy(() => import("./pages/section/Section.tsx"));
const Structure = lazy(() => import("./pages/structure/Structure.tsx"));
const Vacancies = lazy(() => import("./pages/vacancies/Vacancies.tsx"));
const Club = lazy(() => import("./pages/club/Club.tsx"));

function Router() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "company",
      element: <AboutCenter />,
      children: [
        {
          index: true,
          element: <CompanyInfo />,
        },
        {
          path: "staff",
          element: <Management />,
        },
        {
          path: "departments",
          element: <Section />,
        },
        {
          path: "departments/:id",
          element: <StaffDetailPage />,
        },

        {
          path: "structure",
          element: <Structure />,
        },
        {
          path: "vacancy",
          element: <Vacancies />,
        },
        {
          path: "vacancy/:id",
          element: <VacanciesForm />,
        },
        {
          path: "kiberxavfsizlik-klubi",
          element: <Club />,
        },
        {
          path: "Hamkorlar",
          element: <Partners />,
        },
      ],
    },
    {
      path: "news",
      element: <AboutCenterNews />,
      children: [
        {
          index: true,
          element: <NewsList />,
        },
        {
          path: "list",
          element: <NewsList />,
        },
        {
          path: "list/:id",
          element: <NewsViewPage />,
        },

        {
          path: "article",
          element: <ArticleList />,
        },
        {
          path: "article/:id",
          element: <NewsViewPage />,
        },
      ],
    },
    {
      path: "document",
      element: <AboutCenterDocument />,
      children: [
        {
          index: true,
          element: <DocumentList />,
        },
        {
          path: ":id",
          element: <DocumentView />,
        },
        {
          path: "law",
          element: <LawDocumentList />,
        },
        {
          path: "law/:id",
          element: <DocumentView />,
        },
        {
          path: "decision",
          element: <DecisionDocumentList />,
        },
        {
          path: "decision/:id",
          element: <DocumentView />,
        },
        {
          path: "farmon",
          element: <OtherDocumentList />,
        },
        {
          path: "farmon/:id",
          element: <DocumentView />,
        },
        {
          path: "standart",
          element: <StandartDocumentList />,
        },
        {
          path: "standart/:id",
          element: <DocumentView />,
        },
      ],
    },

    {
      path: "services",
      element: <AboutCenterService />,
      children: [
        {
          index: true,
          element: <ServiceList />,
        },
        {
          path: ":id",
          element: <ServiceViewPage />,
        },
        {
          path: ":id/order",
          element: <OrderFormPage />,
        },
      ],
    },
    {
      path: "recommendations",
      element: <AboutCenterRecom />,
      children: [
        {
          index: true,
          element: <RecommendationList />,
        },
        {
          path: ":id",
          element: <RecommendationViewPage />,
        },
        {
          path: "personal",
          element: <PersonalRecommendationList />,
        },
        {
          path: "education",
          element: <EducationRecommendationList />,
        },
        {
          path: "professional",
          element: <ProfessionalRecommendationList />,
        },
      ],
    },

    {
      path: "contacts",
      element: <ContactInfo />,
    },
    {
      path: "action",
      element: <ActionFormPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
