import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";
import { Spinner, Button } from "flowbite-react";
import useGetDocuments from "./hook/useDocument";
import { DocumentItem } from "./interface/document.interface";
import useDownloadFiles from "./hook/useFileDownload";

const DocumentView = () => {
  const { id } = useParams<{ id: string }>();
  const { documents, isLoading } = useGetDocuments();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { download } = useDownloadFiles(Number(id));

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading document" size="xl" />
      </div>
    );
  }
  const document: DocumentItem | undefined = documents.find(
    (doc) => doc.id.toString() === id,
  );

  if (!document) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        {t("Document not found")}
      </div>
    );
  }
  const { title, description } = document.translations?.[i18n.language] || {};
  const category = document.category;
  const size = document.size;

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-md transition-colors duration-300 dark:bg-gray-800">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          color="light"
          className="mb-4"
        >
          Ortga →
        </Button>
      </div>

      <div className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span className="font-medium">{t("Category")}:</span> {category}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{t("Downloads")}:</span>{" "}
          {document.downloadCount}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{t("Created")}:</span>{" "}
          {new Date(document.createdAt).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{t("Updated")}:</span>{" "}
          {new Date(document.updatedAt).toLocaleDateString()}
        </div>
        <div className="col-span-2 flex items-center gap-2">
          <span className="font-medium">{t("Tags")}:</span>{" "}
          {document.tags.length > 0 ? document.tags.join(", ") : t("No tags")}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-600" />

      <div className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </div>
      <div className="flex flex-col gap-3 pt-4">
        <div className="text-lg font-semibold text-gray-800 dark:text-white">
          {t("Files")}
        </div>
        {document.files.map((file, index) => {
          const fileName = file.replace(/^uploads\//, "");
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 shadow-sm transition-colors duration-300 dark:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-2xl text-red-500" />
                <span className="truncate text-sm text-gray-800 dark:text-gray-200">
                  {fileName}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {size}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start pt-4">
        <Button color="red" size="md" onClick={() => download()}>
          {t("Download")}
        </Button>
      </div>
    </div>
  );
};

export default DocumentView;
