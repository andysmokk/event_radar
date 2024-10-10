import { IEvent } from "@/lib/database/models/event.model";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "All_events" | "My_Tickets" | "Events_Organized";
  urlParamName?: string;
  page: number | string;
  totalPages?: number;
  limit: number;
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  urlParamName,
  page,
  totalPages = 0,
}: CollectionProps) => {
  return <div>Collection</div>;
};

export default Collection;
