import { Bold } from "./_components/MainText/Bold";
import { Nav } from "./_components/NavBar/Nav";
export default function Home() {
  return (
<div className="bg-[url('/stripes.png')] min-h-screen rounded-b-[60px] md:rounded-b-[120px] relative overflow-hidden">
  <div className="w-1/2 h-1/3 top-[-20%] left-[20%] bg-[#101C5CA3] rounded-full absolute blur-[60px]"></div>
  <div className="w-1/2 h-1/3 top-[-15%] left-[50%] bg-[#101C5CA3] rounded-full absolute blur-[60px]"></div>
   <Nav />
      <div className="top-[20%] left-[10%] absolute">
        <Bold />
      </div>
    </div>
  );
}