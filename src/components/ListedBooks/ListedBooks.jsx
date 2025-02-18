import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setstoreReadlist] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storeReadlist = getStoredReadList();

    const storeReadlistInt = storeReadlist.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storeReadlistInt.includes(book.bookId)
    );

    setstoreReadlist(readBookList);
  }, []);

  return (
    <div>
      <h1 className="text-3xl my-8">Listed Books</h1>
      <Tabs>
        <TabList>
          <Tab>Marked As Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read</h2>
          <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
