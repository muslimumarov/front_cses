import { Spinner, Pagination } from "flowbite-react";
import useGetDocuments from "./hook/useDocument.ts";
import DocumentCard from "./component/CocumentCard.tsx";

const DocumentList = () => {
  const { documents, pagination, isLoading, page, setPage } = useGetDocuments();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center dark:bg-gray-800">
        <Spinner aria-label="Loading documents" size="xl" />
      </div>
    );
  }

  const filteredDocuments = documents.filter(
    (item) =>
      item.category ===
      "Oʻzbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari",
  );

  return (
    <>
      <div className="grid gap-6 dark:bg-gray-800 dark:text-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredDocuments.map((item) => (
          <DocumentCard key={item.id} item={item} />
        ))}
      </div>

      {pagination?.totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={setPage}
            showIcons
          />
        </div>
      )}
    </>
  );
};

export default DocumentList;
