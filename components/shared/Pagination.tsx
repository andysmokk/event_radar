"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

type PaginationProps = {
  urlParamName?: string;
  page: number | string;
  totalPages: number;
};

const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: string) => {};

  return (
    <div className="flex gap-2">
      <Button>Previous</Button>
    </div>
  );
};

export default Pagination;
