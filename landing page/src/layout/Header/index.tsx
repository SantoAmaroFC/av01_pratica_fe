export default function Header() {
    return(
        
        


<header className="px-5 md:px-20 py-6 flex items-center  justify-between  ">
      <div className="flex ">
        <img className=" h-7 " src="/logo-icone.png"  />
        <p className="font-black text-[#153229]">Pet</p>
        <p className="font-black text-[#87CEFA]">Care</p>
      </div>

      <nav>
        <ul className="flex items-end gap-5 md:gap-10">
          <li>
            <p className="border-b border">Lista de favorito</p>
          </li>
        </ul>
      </nav>

      
    </header>
  );
}