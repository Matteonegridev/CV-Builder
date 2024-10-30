function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 bg-primary p-7 shadow-sm shadow-slate-500">
      <nav className="flex items-center justify-around">
        <h1 className="font-bold text-yellow-300 ~text-base/4xl">
          <span className="font-normal text-white">CV</span>Builder
        </h1>
        <p className="text-white ~text-base/2xl">
          Want to build you resume? Now you can do it for{' '}
          <span className="font-semibold text-yellow-300 underline">FREE!</span>
        </p>
      </nav>
    </header>
  );
}

export default Header;
