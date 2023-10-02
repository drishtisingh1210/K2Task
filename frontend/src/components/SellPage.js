import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "./Layout/Layout";
import axios from "axios";

const SellPage = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    condition: Yup.string().required("Condition is required"),
    category: Yup.string().required("Category is required"),
    // image: Yup.mixed().required("Image is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    description: "",
    price: 0,
    condition: "",
    category: "",
    image: [],
  };

  // Handle form submission
  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/product/create",
        values
      );
      if (response.status === 201) {
        console.log("Product created sucessfully");
        console.log(values);
        resetForm();
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto p-4 mt-20 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Create a Product</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {/* ... other form fields ... */}
              <div className="mt-5">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("name", event.currentTarget.value);
                  }}
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="description "
                  className="block text-gray-600 font-semibold"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("description", event.currentTarget.value);
                  }}
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
                  type="number"
                  id="price"
                  name="price"
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                  min="0"
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("price", event.currentTarget.value);
                  }}
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
                  name="condition"
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("condition", event.currentTarget.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select...
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
                  name="category"
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("category", event.currentTarget.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="table">Table</option>
                  <option value="sofa">Sofa</option>
                  <option value="bed">Bed</option>
                  <option value="chair">Chair</option>
                  <option value="almirah">Almirah</option>
                  <option value="homeDecor">Home Decor</option>
                  {/* <option value=""></option> */}
                </select>
              </div>

              <div className="mb-4 mt-5">
                <label
                  htmlFor="image"
                  className="block text-gray-600 font-semibold"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    // Set the form field value to the selected file
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  className="border w-full p-2 rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="image"
                  component="p"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  disabled={isSubmitting}
                  onSubmit={onSubmit}
                >
                  {isSubmitting ? "Submitting..." : "Create Product"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default SellPage;
