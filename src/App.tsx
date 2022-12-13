import React from "react";
import Calendar from "./features/Calendar/Calendar";
import { RecoilRoot } from "recoil";
import TodoFormModal from "./features/TodoFormModal";
import TodoStatisticsModal from "./features/TodoStatisticsModal";
import TodoList from "./features/TodoList";

function App() {
  return (
    <RecoilRoot>
      <Calendar />
      <TodoFormModal />
      <TodoStatisticsModal />
    </RecoilRoot>
  );
}

export default App;
