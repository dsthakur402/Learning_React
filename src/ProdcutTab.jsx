import Product from "./Product";

function ProductTab() {
  let features = ["hi", "snin", "dnsn"];  // Array of features

  return (
    <>
      <Product title={"phone"} price={5000} features={features} />
      <Product title={"laptop"} price={30000} features={features} />
      <Product title={"fan"} price={900} features={features} />
    </>
  );
}

export default ProductTab;
