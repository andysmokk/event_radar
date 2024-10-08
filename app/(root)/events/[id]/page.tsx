import Image from "next/image";

import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="hero image"
          width={100}
          height={100}
          className="w-full min-h-[300px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default EventDetails;
