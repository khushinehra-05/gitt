export default function Navbar(){
  return(<>
  <div className="oterbody h-[10vh] bg-black text-white w-full flex flex-row items-center justify-between">
    <div className="logo p-5"><h1 className="text-3xl">LOGO</h1>
</div>
    <div className="options p-5">
      <ul className="flex flex-row ">
        <li className="about p-5">About </li>
        <li className="home p-5">Home</li>
        <li className="login p-5">LoGin</li>
        <li className="contactus p-5 hover:scale-110 ">ContactUs</li>
      </ul>
    </div>
  </div>
  </>)
}