import { Header } from "../../components/Header/Header";
import { ListTeachers } from "../../components/ListTeachers/ListTeachers";
import { ContextProvider } from "../../helpers/ContextProvider";

export const Teachers = () => {
  return (
    <ContextProvider>
      <div className="min-h-screen grid grid-rows-[min-content_1fr_min-content] pb-8 pt-5">
        <Header />
        <ListTeachers />
      </div>
    </ContextProvider>
  );
};
