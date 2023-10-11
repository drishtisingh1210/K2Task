import React from "react";
import Layout from "./Layout/Layout";
import RevealOnScroll from "./RevealOnScroll";

const Contact = () => {
  return (
    <Layout>
      <div className="mt-24 flex justify-center items-center p-10 animate__animated animate__flipInX">
        <RevealOnScroll>
          <h2 className="flex justify-center items-center text-2xl font-bold mb-10 ">
            Contact Us
          </h2>
          <p className=" bg-gray-100 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            gravida a libero ut congue. Integer lobortis odio non lorem
            hendrerit bibendum. Suspendisse ut accumsan lorem. Vivamus ut justo
            in arcu ultrices auctor non eget dui. Nulla sollicitudin blandit
            ultricies. Proin sollicitudin malesuada bibendum. Quisque sed felis
            mauris. Vestibulum finibus elit in hendrerit cursus. Duis nulla
            eros, semper nec pharetra eget, commodo non erat. Mauris molestie
            rhoncus egestas. Donec sed elementum purus, eu lobortis lectus.
            Pellentesque varius purus id dolor accumsan, at tristique sapien
            porttitor. Vestibulum nisl ipsum, porttitor lobortis facilisis nec,
            ullamcorper vel ex. Aliquam hendrerit metus sem, non volutpat lacus
            efficitur in. Ut eu enim porta, mattis nunc sit amet, tincidunt
            justo. Nam dui mauris, volutpat nec consectetur eget, gravida non
            elit. Mauris mauris ex, malesuada at consectetur non, elementum quis
            neque. Nunc a tellus elementum, consectetur libero quis, consectetur
            arcu. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Nunc porttitor ipsum leo, et
            consectetur lectus pellentesque sit amet. Maecenas porttitor cursus
            mauris ut elementum. Sed interdum quam purus, feugiat varius magna
            scelerisque sed.
          </p>
        </RevealOnScroll>
      </div>
    </Layout>
  );
};

export default Contact;
