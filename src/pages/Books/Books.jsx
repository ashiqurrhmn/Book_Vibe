import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "../../components/ListedBooks/readListBooks";
import WishListBooks from "../../components/ListedBooks/wishListBooks";

const Books = () => {
  const { readBooks, wishListBooks } = useContext(BookContext);
  console.log(readBooks, wishListBooks, "BookContext");

  return (
    <div className="w-9/12 mx-auto mt-10 mb-20">
      <div className="text-center font-extrabold text-2xl my-10 bg-gray-100 py-10 rounded-lg">
        Books
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadListBooks />
          </TabPanel>
          <TabPanel>
            <WishListBooks />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
