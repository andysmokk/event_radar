"use client";

import { useUser } from "@clerk/nextjs";

import { IEvent } from "@/lib/database/models/event.model";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return <div className="flex items-center gap-3">CheckoutButton</div>;
};

export default CheckoutButton;
