import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import AddSaleForm from "./components/AddSaleForm";
import SaleList from "./components/SaleList";
import InventoryReport from "./components/InventoryReport";
import SalesReport from "./components/SalesReport";
import Header from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <Container maxW="container" mt={1}>
     <Header />
      <VStack align="start" spacing={8}>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/add-item" element={<AddItemForm />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/add-sale" element={<AddSaleForm />} />
          <Route path="/inventory-report" element={<InventoryReport />} />
          <Route path="/sales-report" element={<SalesReport />} />
        </Routes>
      </VStack>
    </Container>
  );
}

export default App;
