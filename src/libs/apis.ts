import { Room } from "@/app/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries"

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {

    },
    {
      // next: {
      //   revalidate: 1800
      // },
      cache: "no-cache"
    }
  );

  return result;
}