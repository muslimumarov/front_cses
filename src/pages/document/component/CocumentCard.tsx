import { useTranslation } from "react-i18next";
import { File, FileText, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { DocumentItem } from "../interface/document.interface";

const getFileExtension = (filePath: string) => {
  return filePath?.split(".").pop()?.toLowerCase() || "";
};

const getFileIcon = (filePath: string) => {
  const ext = getFileExtension(filePath);
  switch (ext) {
    case "pdf":
      return {
        icon: <FileText size={20} className="text-red-500" />,
        color: "text-red-500",
      };
    case "doc":
    case "docx":
      return {
        icon: <File size={20} className="text-blue-500" />,
        color: "text-blue-500",
      };
    case "jpg":
    case "png":
    case "jpeg":
    case "svg":
      return {
        icon: <Image size={20} className="text-green-500" />,
        color: "text-green-500",
      };
    default:
      return {
        icon: <FileText size={20} className="text-gray-500" />,
        color: "text-gray-500",
      };
  }
};

const DocumentCard = ({ item }: { item: DocumentItem }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const title = item.translations?.[i18n.language]?.title || t("No title");
  const category = item.category || t("No category");
  const size = item.size || "";
  const date = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString()
    : "";
  const filePath = item.files?.[0] || "";
  const { icon, color } = getFileIcon(filePath);
  const fileType = getFileExtension(filePath) || "Unknown";

  return (
    <div
      onClick={() => navigate(`/document/${item.id}`)}
      className="relative flex h-full cursor-pointer flex-col justify-between rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-5 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:from-gray-700 dark:to-gray-800"
    >
      <div>
        <div className="flex items-center gap-2">
          {icon}
          <span className={`text-sm font-medium ${color}`}>{fileType}</span>
        </div>
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {category}
        </p>
      </div>
      <div className="mt-auto text-sm text-gray-700 dark:text-gray-300">
        <div>
          <strong>{t("Hajmi")}:</strong> {size}
        </div>
        <div>
          <strong>{t("Sana")}:</strong> {date}
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
