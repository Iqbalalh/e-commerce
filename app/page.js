import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import SectionBadge from "./components/SectionBadge";
import TopHeader from "./components/TopHeader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopHeader />
      <Header />
      <SectionBadge badge="Today's"/>
      <CustomButton text="View All" filling={false} disabledState={true}/>
    </main>
  );
}
