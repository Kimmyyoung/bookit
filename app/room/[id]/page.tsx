import Error from '@/app/error';
import RoomDetails from '@/components/room/RoomDetails';

export const dynamic = "force-dynamic";
// no cache for this page

interface Props {
  params: {
    id: string
  }
}

const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
}

export default async function RoomDetailPage({ params } : Props) {
  const data = await getRoom(params?.id);
  if (data?.success === false) {
    return <Error error={data} />;
  }

  return <RoomDetails data={data} />
}


export async function generateMetadata({ params }) {
  const data = await getRoom(params?.id);

  return {
    title: data?.room?.name,
    description: "Find the best hotels and rooms for your next trip"
  }
}