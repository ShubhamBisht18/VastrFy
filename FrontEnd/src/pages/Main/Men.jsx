// import { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import ProductCard from "../../components/ProductCard";

// function Men() {
//   const [products, setProducts] = useState([]);
//   const categories = ["shirt", "tshirt", "pant", "jeans", "shoes"];

//   useEffect(() => {
//     axios.get("/products").then((res) => {
//       setProducts(res.data.filter((p) => p.gender === "men"));
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-8 py-8">
//       {/* Page Header */}

//       {categories.map((cat) => {
//         const categoryProducts = products.filter((p) => p.category === cat);
//         if (categoryProducts.length === 0) return null;

//         return (
//           <div key={cat} className="mb-12">
//             {/* Category Heading */}
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 border-l-4 border-yellow-400 pl-3 mb-6">
//               {cat.toUpperCase()}
//             </h3>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {categoryProducts.map((p) => (
//                 <ProductCard key={p._id} product={p} />
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Men;


import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import ProductCard from "../../components/ProductCard";

function Men() {
  const [products, setProducts] = useState([]);
  const categories = ["shirt", "tshirt", "pant", "jeans", "shoes"];

  useEffect(() => {
    axios.get("/products").then((res) => {
      setProducts(res.data.filter((p) => p.gender === "men"));
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      {categories.map((cat) => {
        const categoryProducts = products.filter((p) => p.category === cat);
        if (categoryProducts.length === 0) return null;

        return (
          <div key={cat} className="mb-10 sm:mb-12 md:mb-16">
            {/* Category Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 border-l-4 border-yellow-400 pl-3 mb-4 sm:mb-6 md:mb-8">
              {cat.toUpperCase()}
            </h3>

            {/* Product Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {categoryProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Men;
