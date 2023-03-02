function New() {
  return (
    <aside className="w-[30%] min-w-[30%] ml-8 text-white bg-darkish px-6 py-8">
      <h2 className="text-yellow font-bold text-lg">New</h2>

      <ul>
        <li className="border-b border-silver py-7">
          <h3 className="text-sm font-extrabold hover:text-yellow">
            <a href="#">Hydrogen VS Electric Cars</a>
          </h3>
          <p className="text-body text-silver">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </li>
        <li className="border-b border-silver py-7">
          <h3 className="text-sm font-extrabold hover:text-yellow">
            <a href="">The Downsides of AI Artistry</a>
          </h3>
          <p className="text-body text-silver">What are the possible adverse effects of on-demand AI image generation?</p>
        </li>
        <li className="pt-7">
          <h3 className="text-sm font-extrabold hover:text-yellow">
            <a href="">Is VC Funding Drying Up?</a>
          </h3>
          <p className="text-body text-silver">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </li>
      </ul>
    </aside>
  )
}

export default New