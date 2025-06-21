import { Catalog, Container, Filter } from "@/components";
import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";


export default function Home() {
  return (

    <>
      <Header />
      <TopBar />
      <Container className="flex gap-10 mt-10">
        <Filter className="max-w-[245px]" />
        <div className="flex  flex-col">
          <Catalog items={[{ id: 1 }, { id: 2 }, { id: 3 }]} title={"Пиццы"} id={1} />
          <Catalog items={[{ id: 1 }, { id: 2 }, { id: 3 }]} title={"Мясные"} id={2} />
          <Catalog items={[{ id: 1 }, { id: 2 }, { id: 3 }]} title={"Острые"} id={3} />
        </div>

      </Container>
    </>
  );
}
