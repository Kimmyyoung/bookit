import Loader from "@/components/layout/Loader"

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  )
}