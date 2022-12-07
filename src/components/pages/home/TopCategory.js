import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryText from "./CategoryText";
import hijab from "../../../assets/img/category/hijab.png";
import borkha from "../../../assets/img/category/borkha.png";
import abaya from "../../../assets/img/category/abaya.png";
import stylish from "../../../assets/img/category/stylish.jpg";
import khimar from "../../../assets/img/category/khimar.png";
import niqab from "../../../assets/img/category/niqab.jpg";
import Title from "../../shere/Title";
const TopCategory = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/getAllProudct")
      .then((res) => setProduct(res.data));
    setLoading(true);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="bg-[#F4F4F4] py-10">
          <Title title="Top Categories Products" />

          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 md:px-20 px-8 my-14 ">
            <CategoryText
              title="Hijab Items"
              img={hijab}
              pNumber={product.slice(0, 8).length}
              p
              category="hijab"
            />
            <CategoryText
              title=" Borka Items "
              img={borkha}
              pNumber={product.slice(8, 19).length}
              category="borkha"
            />
            <CategoryText
              title=" Abaya Borka  "
              img={abaya}
              pNumber={product.slice(19, 28).length}
              category="abaya"
            />
            <CategoryText
              title="Stylish Borka "
              img={stylish}
              pNumber={product.slice(28, 39).length}
              category="stylish"
            />
            <CategoryText
              title="Khimar "
              img={khimar}
              pNumber={product.slice(39, 43).length}
              category="khimar"
            />
            <CategoryText
              title="Niqab "
              img={niqab}
              pNumber={product.slice(42, 46).length}
              category="niqab"
            />
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
};

export default TopCategory;
