import { MenuInterface } from "../interfaces/menu.interface.ts";

const createMenuItems = (t: (text: string) => string): MenuInterface[] => [
  {
    path: "/company",
    label: t("Markaz haqida"),
    children: [
      {
        path: "staff",
        label: t("Markaz rahbariyati"),
      },
      {
        path: "departments",
        label: t("Markaz boʻlimlari"),
      },
      {
        path: "structure",
        label: t("Markaz tuzilmasi"),
      },
      {
        path: "vacancy",
        label: t("Boʻsh ish oʻrinlari"),
      },
      {
        path: "kiberxavfsizlik-klubi",
        label: t("Kiberxavfsizlik klubi"),
      },
      {
        path: "xalqaro-hamkorlik",
        label: t("Xalqaro hamkorlik"),
      },
    ],
  },
  {
    path: "/news",
    label: t("Press-markaz"),
    children: [
      {
        path: "local",
        label: t("Mahalliy yangiliklar"),
      },
      {
        path: "global",
        label: t("Xalqaro yangiliklar"),
      },
      {
        path: "articles",
        label: t("Maqolalar"),
      },
    ],
  },
  {
    path: "/services",
    label: t("Xizmatlar"),
    children: [
      {
        path: "order",
        label: t("Buyurtma berish"),
      },
    ],
  },
  {
    path: "/document",
    label: t("Hujjatlar"),
    children: [
      {
        path: "uzbekistan-laws",
        label: t("Oʻzbekiston Respublikasi qonunlari"),
      },
      {
        path: "decrees",
        label: t(
          "Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari",
        ),
      },
      {
        path: "resolutions-and-orders",
        label: t(
          "Oʻzbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlari",
        ),
      },
      {
        path: "standards",
        label: t("O‘zbekiston Respublikasi Davlat standartlari"),
      },
    ],
  },
  {
    path: "/recommendations",
    label: t("Tavsiyalar"),
    children: [
      {
        path: "faq",
        label: t("Savol va javoblar"),
      },
      {
        path: "mspd-monitoring-xabar-beruvchi-tizimi",
        label: t("Tarmoq tizimlarini monitoring qilish dasturi"),
      },
      {
        path: "antivirus-ilovalari",
        label: t("Antivirus ilovalari"),
      },
    ],
  },
  {
    path: "/contacts",
    label: t("Bogʻlanish"),
  },
  {
    path: "/company/vacancy",
    label: t("Karyera"),
  },
];

export default createMenuItems;
