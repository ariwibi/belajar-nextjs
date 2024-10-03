import dongo from "@/public/donog.jpg";
import person from "@/public/IMG_20220321_195632.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000"
        alt="cerdas"
        priority
        width={1000}
        height={700}
      />
    </div>
  );
}
