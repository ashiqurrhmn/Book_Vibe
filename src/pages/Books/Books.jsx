import React, { useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "../../components/ListedBooks/readListBooks";
import WishListBooks from "../../components/ListedBooks/wishListBooks";

const Books = () => {

    const [sortType, setSortType] = useState("");

  return (
    <div className="w-9/12 mx-auto mt-10 mb-20">
      <div>
      </div>
      <div className="text-center font-extrabold text-2xl mt-10 mb-5 bg-gray-100 py-10 rounded-lg">
        Books
      </div>
      <div className="mb-10 flex justify-center">

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-white">
            Sort by - {sortType || 'Default'}
          </div>
          <ul 
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm"
          >
            <li onClick={() => setSortType('pages')}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortType('rating')}>
              <a >Rating</a>
            </li>
          </ul>
        </div>
      </div> 
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadListBooks sortType={sortType} />
          </TabPanel>
          <TabPanel>
            <WishListBooks sortType={sortType} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
