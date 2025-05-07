const Navigation = () => {
    return (
        <nav>
          <div className="logo container">
            <img  src="./public/images/brand_logo.png" alt="No logo" />
          </div>

          <ul>
            <li href="#"> Menu </li>
            <li href="#"> About </li>
            <li href="#"> Location </li>
            <li href="#"> Contact </li>
          </ul>

          <button> Login </button>
        </nav>
    )
}

export default Navigation