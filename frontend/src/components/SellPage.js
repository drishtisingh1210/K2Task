// import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Layout from "./Layout/Layout";
// import axios from "axios";

// const SellPage = () => {
//   // Validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     description: Yup.string().required("Description is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be positive"),
//     condition: Yup.string().required("Condition is required"),
//     category: Yup.string().required("Category is required"),
//     // image: Yup.mixed().required("Image is required"),
//   });
//   // const [name, setname] = useState(null);
//   // const [description, setDesc] = useState(null);
//   // const [price, setPrice] = useState(null);
//   // const [category, setCategory] = useState(null);
//   // const [images, set] = useState([]);
//   // // const [, setname] = useState(null);
//   // // const [name, setname] = useState(null);

//   // Initial form values
//   const initialValues = {
//     name: "",
//     description: "",
//     price: 0,
//     condition: "",
//     category: "",
//     images: [],
//   };

//   // Handle form submission
//   const onSubmit = async (values, { resetForm }) => {
//     try {
//       console.log(values);
//       var formData = new FormData();
//       formData.append("images", values.images);
//       formData.append("name", values.name);
//       formData.append("description", values.description);
//       formData.append("price", values.price);
//       formData.append("category", values.category);
//       formData.append("condition", values.condition);
//       console.log(formData);
//       const response = await axios.post(
//         "http://localhost:3001/api/product/create",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       if (response.status === 201) {
//         console.log("Product created sucessfully");
//         console.log(values);
//         resetForm();
//       } else {
//         console.error("Failed to create product");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-md mx-auto p-4 mt-20 min-h-screen">
//         <h2 className="text-2xl font-semibold mb-4">Create a Product</h2>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ isSubmitting, setFieldValue }) => (
//             <Form encType="multipart/form-data">
//               {/* ... other form fields ... */}
//               <div className="mt-5">
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("name", event.currentTarget.value);
//                   }}
//                 />
//               </div>
//               <div className="mt-5">
//                 <label
//                   htmlFor="description "
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Description
//                 </label>
//                 <input
//                   type="text"
//                   id="description"
//                   name="description"
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("description", event.currentTarget.value);
//                   }}
//                 />
//               </div>
//               <div className="mt-5">
//                 <label
//                   htmlFor="price"
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                   min="0"
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("price", event.currentTarget.value);
//                   }}
//                 />
//               </div>
//               <div className="mt-5">
//                 <label
//                   htmlFor="condition"
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Condition
//                 </label>
//                 <select
//                   id="condition"
//                   name="condition"
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("condition", event.currentTarget.value);
//                   }}
//                 >
//                   <option value="" disabled selected>
//                     Select...
//                   </option>
//                   <option value="new">New</option>
//                   <option value="used">Used</option>
//                 </select>
//               </div>
//               <div className="mt-5">
//                 <label
//                   htmlFor="category"
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   name="category"
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("category", event.currentTarget.value);
//                   }}
//                 >
//                   <option value="" disabled selected>
//                     Select...
//                   </option>
//                   <option value="table">Table</option>
//                   <option value="sofa">Sofa</option>
//                   <option value="bed">Bed</option>
//                   <option value="chair">Chair</option>
//                   <option value="almirah">Almirah</option>
//                   <option value="homeDecor">Home Decor</option>
//                   {/* <option value=""></option> */}
//                 </select>
//               </div>

//               <div className="mb-4 mt-5">
//                 <label
//                   htmlFor="image"
//                   className="block text-gray-600 font-semibold"
//                 >
//                   Image
//                 </label>
//                 <input
//                   type="file"
//                   id="images"
//                   name="images"
//                   accept="image/*"
//                   multiple
//                   onChange={(event) => {
//                     // Set the form field value to the selected file
//                     setFieldValue("images", event.currentTarget.files);
//                   }}
//                   className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//                 />
//                 <ErrorMessage
//                   name="image"
//                   component="p"
//                   className="text-red-500 mt-1"
//                 />
//               </div>
//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//                   disabled={isSubmitting}
//                   onSubmit={onSubmit}
//                 >
//                   {isSubmitting ? "Submitting..." : "Create Product"}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </Layout>
//   );
// };

// export default SellPage;
// import React, { useState } from "react";
// import Layout from "./Layout/Layout";
// import axios from "axios";

// const SellPage = () => {
//   // State to store form values
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: 0,
//     condition: "",
//     category: "",
//     images: [],
//   });
//   // const [images, setImages] = useState([]);

//   // const onImageUpload = (e) => {
//   //   setImages(e.target.files);
//   //   console.log(images);
//   // };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value, type, files } = e.target;
//     const newValue = type === "file" ? files : value;

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("description", formData.description);
//       data.append("price", formData.price);
//       data.append("condition", formData.condition);
//       data.append("category", formData.category);
//       // data.append("images", formData.images);
//       data.append("images", formData.images);
//       console.log(formData);
//       const response = await axios.post(
//         "http://localhost:3001/api/product/create",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 201) {
//         console.log("Product created successfully");
//         // Clear the form
//         setFormData({
//           name: "",
//           description: "",
//           price: 0,
//           condition: "",
//           category: "",
//           images: null,
//         });
//       } else {
//         console.error("Failed to create product");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-md mx-auto p-4 mt-20 min-h-screen">
//         <h2 className="text-2xl font-semibold mb-4">Create a Product</h2>
//         <form encType="multipart/form-data" onSubmit={handleSubmit}>
//           {/* ... other form fields ... */}
//           <div className="mt-5">
//             <label htmlFor="name" className="block text-gray-600 font-semibold">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mt-5">
//             <label
//               htmlFor="description"
//               className="block text-gray-600 font-semibold"
//             >
//               Description
//             </label>
//             <input
//               type="text"
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mt-5">
//             <label
//               htmlFor="price"
//               className="block text-gray-600 font-semibold"
//             >
//               Price
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//               min="0"
//             />
//           </div>
//           <div className="mt-5">
//             <label
//               htmlFor="condition"
//               className="block text-gray-600 font-semibold"
//             >
//               Condition
//             </label>
//             <select
//               id="condition"
//               name="condition"
//               value={formData.condition}
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//             >
//               <option value="" disabled>
//                 Select...
//               </option>
//               <option value="new">New</option>
//               <option value="used">Used</option>
//             </select>
//           </div>
//           <div className="mt-5">
//             <label
//               htmlFor="category"
//               className="block text-gray-600 font-semibold"
//             >
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//             >
//               <option value="" disabled>
//                 Select...
//               </option>
//               <option value="table">Table</option>
//               <option value="sofa">Sofa</option>
//               <option value="bed">Bed</option>
//               <option value="chair">Chair</option>
//               <option value="almirah">Almirah</option>
//               <option value="homeDecor">Home Decor</option>
//             </select>
//           </div>
//           <div className="mb-4 mt-5">
//             <label
//               htmlFor="image"
//               className="block text-gray-600 font-semibold"
//             >
//               Image
//             </label>
//             <input
//               type="file"
//               id="images"
//               name="images"
//               accept="image/*"
//               multiple
//               onChange={handleInputChange}
//               className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//             >
//               Create Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default SellPage;

//Functioning Code
import React, { useState } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";
import * as Heroicons from "heroicons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SellPage = () => {
  // const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    condition: "",
    category: "",
  });
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  // console.log(formData.name);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const newValue =  value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileRemove = (index) => {
    // Remove a file from the state based on its index
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    // submitData.append("images", file);
    for (let i = 0; i < file.length; i++) {
      submitData.append("images", file[i]);
    }
    submitData.append("name", formData.name);
    submitData.append("description", formData.description);
    submitData.append("price", formData.price);
    submitData.append("category", formData.category);
    submitData.append("condition", formData.condition);

    try {
      console.log(file);
      const response = await axios.post(
        "http://localhost:3001/api/product/create",
        submitData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
          credentials: "include",
        }
      );
      if (response.status === 201) {
        console.log("Product created sucessfully");
        console.log(submitData);
        // setShowSuccessCard(true); // Step 2
        toast.success(
          "Thanks For Creating the Product!. If you want to create more feel free to do so",
          { theme: "dark", position: "top-center" }
        );
        setFormData({
          name: "",
          description: "",
          price: "",
          condition: "",
          category: "",
        }); // Reset the form data
        setFile([]); // Reset the file input
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
      navigate("/signup");
    }
  };
  return (
    <Layout className="min-h-screen">
      <div className="max-w-md mx-auto p-4  bg-slate-100  border-2 mt-24 rounded animate__animated animate__zoomInDown">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add to Inventory
        </h2>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="name" className="block text-gray-600 font-semibold">
              Name
            </label>
            <input
              value={formData.name}
              className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:border-blue-500"
              name="name"
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="description"
              className="block text-gray-600 font-semibold"
            >
              Description
            </label>
            <input
              className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:border-blue-500"
              name="description"
              type="text"
              onChange={handleChange}
              required
              value={formData.description}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="price"
              className="block text-gray-600 font-semibold"
            >
              Price
            </label>
            <input
              className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:border-blue-500"
              name="price"
              type="number"
              onChange={handleChange}
              required
              value={formData.price}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="condition"
              className="block text-gray-600 font-semibold"
            >
              Condition
            </label>
            <select
              id="condition"
              className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:border-blue-500"
              name="condition"
              type="text"
              onChange={handleChange}
              value={formData.condition}
            >
              <option value="" disabled>
                Select..
              </option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
          <div className="mt-5">
            <label
              htmlFor="category"
              className="block text-gray-600 font-semibold"
            >
              Category
            </label>

            <select
              id="category"
              className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:border-blue-500"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            >
              <option value="" disabled>
                Select Category..
              </option>
              <option value="sofa">Sofa</option>
              <option value="bed">Bed</option>
              <option value="chair">Chair</option>
              <option value="almirah">Almirah</option>
              <option value="table">Table</option>
              <option value="homeDecor">Home Decor</option>
            </select>
          </div>
          <div className="mb-4 mt-5">
            <label
              // htmlFor="images"
              htmlFor="file"
              className="block text-gray-600 font-semibold border border-gray-300 w-1/2 p-2 rounded"
            >
              Choose Images
            </label>
            <input
              id="file"
              name="images"
              type="file"
              multiple
              onChange={(e) => {
                setFile([...e.target.files]);
              }}
              required
              style={{ display: "none" }}
            />
          </div>

          {/* <div className="mt-2">
            {file.map((file, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="mr-2">{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleFileRemove(index)}
                  className="text-red-600 font-semibold"
                >
                  <Heroicons.XCircleOutline />
                </button>
              </div>
            ))}
          </div> */}
          {file.length > 0 && (
            <div className="mt-2">
              {file.map((file, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="mr-2">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleFileRemove(index)}
                    className="text-red-400 font-semibold"
                  >
                    <Heroicons.XCircleOutline />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mb-4  mt-8 p-5 flex justify-center ">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded border-blue-600 border-2 w-1/2"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </Layout>
  );
};

export default SellPage;
