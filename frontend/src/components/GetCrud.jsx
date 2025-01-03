import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const cruds = [
//   {
//     _id: {
//       $oid: "6221e9ff711c42195b3e8e81",
//     },
//     companyName: "Atlantic IT Solutions",
//     phone: "251-911-603566",
//     email: "info@atlanticplc.com",
//     location: "Wello Sefer, Addis Ababa",
//     link: "https://atlanticplc.com",
//     description:
//       "Atlantic IT Solutions is an ICT Company established in early 2008 GC in Ethiopia.  Our company provides a range of IT solutions to automate and facilitate your company activities. We have highly skilled, specialized and professional team to take care of your projects.\n\nWe provide Website Development, Custom Software Development, Website Hosting and Business Email Hosting solutions, to mention some.\n\nThe majority of our clients include companies like Logistics, Contractors, Hotels, Manufacturers, Importers, Exporters, Associations, NGOs and other Industries. We are committed to our clients’ requirements and fulfill their needs in a professional and most economical way. Our ultimate aim is to give full satisfaction to our clients.",
//   },
//   {
//     _id: {
//       $oid: "6221eaa1711c42195b3e8e8b",
//     },
//     companyName: "Pasqua Giuseppe Aluminum & Metal Works PLC",
//     phone: "251-114-420760",
//     email: "info@pasquagiuseppe.com",
//     location: "Next to St. Joseph Church, Addis Ababa",
//     link: "https://pasquagiuseppe.com",
//     description:
//       "Pasqua Giuseppe PLC established in 1965 as a Steel Fabrication, Aluminum and Glass Assembling Company. Since its establishment, it has diversified its reach in various industrial sectors.\n\nPasqua Giuseppe PLC is one of the pioneer company in the introduction of Aluminum Products in the construction sector.\n\nWe have been Fabricating and Supplying different size Tankers, Agricultural Trailers and Steel Structures for National & International market. We have been satisfying the growing demand of Tankers for Oil companies and Trailers for Commercial Farmers.",
//   },
//   {
//     _id: {
//       $oid: "6221eac7711c42195b3e8e90",
//     },
//     companyName: "adrasha.com - Ethiopian Business Direcctory",
//     phone: "251-911-603566",
//     email: "info@adrasha.com",
//     location: "Wello Sefer, Addis Ababa",
//     link: "https://adrasha.com",
//     description:
//       "adrasha.com is an online Ethiopian Business Directory Platform where Businesses list their profile and reach out Thousands of Customers.\n\nWhether your Business is in Automotive, Construction, Health, Hospitality, Import Export, Manufacturing, Trading or Service Industry, a listing on adrasha.com will increase your visibility & customers will find you with multiple listing features.\n\nGet Listed and let your Business Operate 24×7.\n\nኢትዮጵያ ዉስጥ ከ 23 ሚልየን በላይ ህዝብ ኢንተርኔት ተጠቃሚ እንዳለ ያዉቃሉ? ድርጅቶን adrasha.com ላይ በመመዝገብ ዲጂታል ዓለሙን ይቀላቀሉ፣ ብዙዎችን በኢንተርኔት ይድረሱ ፣ ተጨማሪ ደምበኛ ያፍሩ።",
//   },
//   {
//     _id: {
//       $oid: "6221eafc711c42195b3e8e95",
//     },
//     companyName: "CGF Business Group",
//     phone: "251-114-166268",
//     email: "cgfbg@yahoo.com",
//     location:
//       "KirkosSub-city | Wereda 06 | Gotera Area|   Baleker Tower 6th Floor",
//     link: "https://www.cgfbg.com/",
//     description:
//       "Our Business Groups aims to provide our valuable customers with high quality genuine products that they deserve. It is one of our core values to maintain a customer centered healthy relationship so as to show a steady and successful growth.\n\nWe believe that our customers are our stakeholders that is why we keep maintaining our intact communications to learn from them in order to let us always be abreast and champions in the stage of dynamic market as usual.\n\nThe newly introduced technologies, innovations and marketing strategy are the secrets of our success to our customers' satisfaction.",
//   },
//   {
//     _id: {
//       $oid: "6225f780e0696f30edaa17e5",
//     },
//     companyName: "Hibir Academy",
//     phone: "251-116-465665",
//     email: "info@hibiracademy.com",
//     location: "Gurd Shola Behind Beshale Hotel, Addis Ababa",
//     link: "https://hibiracademy.com/",
//     description:
//       "Choose Hibir Academy Our Project Based Learning held in the state-of-the-art comfortable classes will nurture your kid’s independent thinking and make them a leader of Future World!\n\nWhy Hibir Academy\n\n✅Project Based Learning\n✅ Nurturing critical and independent thinking\n✅ Wide range of extracurricular and after school activities by professional trainers and coaches\n✅ Comfortable class rooms equipped with state-of-the-art facilities to increase teacher-student interactions\n✅ Committed teachers and support staff\n\nThe Values that unite our School Community are:\n\n- Integrity\n- Excellence\n- Curiosity\n- Respect\n- Compassion\n- Responsibility\n\nCome and Visit Us! \n\nGurd Shola Behind Beshale Hotel, Addis Ababa\n☎️Call: +251-116-465665 or ? +251-978-815277\n#hibiracademy #preschools #schools #education #learning #parents #mom #dads #schoolinaddisababa #addisababa",
//     __v: 0,
//   },
// ];

const GetCrud = () => {
  const [cruds, setCruds] = useState([]);

  useEffect(function () {
    async function getCruds() {
      try {
        const response = await axios.get(
          "https://merncrud-backend.vercel.app/api/cruds/getData"
        );

        setCruds(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getCruds();
  }, []);

  return (
    <div className="container">
      <div>
        <h2>
          CRUD - Table View
          <p className="checkDisp">
            <Link to="/AddCrud" className="btn btn-primary float-right">
              Create CRUD
            </Link>
            <Link to="/" className="btn btn-primary float-right">
              Cancel
            </Link>
          </p>
        </h2>
        <hr />
      </div>
      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cruds &&
              cruds?.map((crud) => {
                return (
                  <tr key={crud._id}>
                    <td>
                      <Link to={`/cruds/${crud._id}`} className="link-line">
                        {crud.companyName}
                      </Link>
                    </td>
                    <td>{crud.phone}</td>
                    <td>{crud.email}</td>
                    <td>{crud.location}</td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}`}
                        className="btn btn-warning"
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}/edit`}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}/delete`}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetCrud;
