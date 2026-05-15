function Product(props) {
  //{props: {productObj:{}}
  const { productObj } = props;
  //state
  //return react element
  return (
    <div className="shadow-2xl p-10">
      <h2 className="text-2xl text-blue-700 pb-3">{productObj.title}</h2>
      <p className="font-bold p-2">{productObj.price}</p>
      <p className="font-mono">{productObj.description}</p>
    </div>
  );
}
export default Product;
