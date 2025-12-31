import { useEffect, useState } from "react";

export const useProfilePaginationVisibility = (loading: boolean): boolean => {
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    setShowPagination(!loading);
  }, [loading]);

  return showPagination;
};
