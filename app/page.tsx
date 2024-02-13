import Home from "@/components/Home"
import Error from './error';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Online Hotel Reservation System",
  description: "Find the best hotels and rooms for your next trip"
}

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`);

  return res.json();
}

const page = async () => {
  const data = await getRooms();

  // errorhandler
  if (data?.success === false) {
    return <Error error={data} />;
  }

  return (
    <Home data={data} />
  )
}

export default page