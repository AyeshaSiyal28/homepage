
const card = (prop) => {
  return (
    <>
                 <div className="card">
                    <img src={prop.imgSrc} alt="" />
                  <div className="first">
                    <h3>{prop.title}</h3>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
                    <div className="cards-icon">
                    <img src={prop.imgsrc} alt="" />
                    <img src={prop.Imgsrc} alt="" />
                    </div>
                  </div>
                 </div>
    </>
  )
}

export default card