import { useEffect, useState } from "react";
import axios from "axios";

const CardTableData = () => {
  return (
    <section className="mb-8">
      <ComplaintsTable />
    </section>
  );
};

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
}

const ComplaintsTable = () => {
  const [fetchBlogs, setFetchBlogs] = useState<Blog[]>([]);

  const fetchingBlogs = async () => {
    try {
      const response = await axios.get(
        "https://task-server-0xvq.onrender.com/api/tasks"
      );
      if (response.status === 200) {
        setFetchBlogs(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("could not fetch information");
    }
  };

  useEffect(() => {
    fetchingBlogs();
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // calculating the total pages
  const totalPages = Math.ceil(fetchBlogs.length / itemsPerPage);

  // get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fetchBlogs.slice(indexOfFirstItem, indexOfLastItem);

  // toggle effect for the Next and prev buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[100%] bg-white">
      <div className="">
        <table className="overflow-x-auto min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b border-b-[#EAECF0]">
              <th className="py-3 px-4 text-left text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Blog Title
              </th>
              <th className="hidden sm:table-cell py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Author
              </th>
              <th className="py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Submission Date
              </th>
              <th className="hidden sm:table-cell py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Subtitle
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((complaint) => (
              <tr
                key={complaint._id}
                className="border-b border-b-[#EAECF0] text-[#475467] hover:bg-gray-50"
              >
                <td className="py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.title}
                </td>
                <td className="hidden sm:table-cell text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.author}
                </td>
                <td className="text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.subtitle}
                </td>
                <td className="hidden sm:table-cell text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {new Date(complaint.createdAt).toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-b border-r border-b-[#EAECF0] border-r-[#EAECF0] border-l border-l-[#EAECF0] w-full pagination text-[#475467] flex justify-between items-center p-2">
          <div className="page_information capitalize">
            <p className="font-medium">{`Page ${currentPage} of ${totalPages}`}</p>
          </div>
          <div className="pagination_button flex gap-2 items-center">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`p-2 border border-[#EAECF0] rounded-sm `}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-2 border border-[#EAECF0] rounded-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// the main table data in html jsx format

export default CardTableData;
