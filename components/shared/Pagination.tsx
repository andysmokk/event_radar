import React from "react";

type PaginationProps = {
  urlParamName?: string;
  page: number | string;
  totalPages: number;
};

const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
  return <div>Pagination</div>;
};

export default Pagination;
