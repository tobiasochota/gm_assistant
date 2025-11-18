function Header() {

    const logo = "GMA – Game Master Assistant";
    const name = "Das Schwarze Auge";
    return (
        <div className="Header bg-[#2C3034] text-white p-4 flex justify-center items-center">
            <h2 className="text-lg flex-1 text-left">{logo}</h2>
            <h1 className="text-2xl font-bold flex-1">{name}</h1>
            <div className="flex-1 invisible">Some other content</div>
        </div>
    );
}

export default Header;
