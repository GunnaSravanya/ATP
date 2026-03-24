function Nav() {
  return (
    <div className="flex justify-between bg-gray-500 p-4">
      <h1 className="text-3xl font-bold text-white pl-3">Logo</h1>
      <ul className="flex text-2xl list-none gap-6 text-white pr-5 ">
        <li>Home</li>
        <li>About Us</li>
        <li>Login</li>
      </ul>
    </div>
  );
}
export default Nav;
