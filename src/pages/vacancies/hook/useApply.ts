import useMutate from "../../../core/hooks/api/useMutate.ts";

const useAddCandidate = (vacancyId: number | string) => {
  const { query } = useMutate({
    url: ["vacancy", vacancyId, "add-candidate"],
    isFormData: true,
  });

  const postCandidate = (data: {
    fullName: string;
    phoneNumber: string;
    email: string;
    description: string;
    cv: File;
  }) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("description", data.description);
    formData.append("cv", data.cv);

    return query.mutateAsync(formData);
  };

  return {
    postCandidate,
    ...query,
  };
};

export default useAddCandidate;
