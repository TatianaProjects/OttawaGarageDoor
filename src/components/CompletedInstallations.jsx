function CompletedInstallations() {

  const installations = [
    {
      image: "/images/installation1.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation2.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation3.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation4.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation5.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation6.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation7.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation8.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation9.jpg",
      title: "Installed Garage Door"
    },
    {
      image: "/images/installation10.jpg",
      title: "Installed Garage Door"
    }
    
  ];

  return (

    <section className="installations">

      <div className="section-header">

        <span>NEW INSTALLATIONS</span>

        <h2>Recently Installed Garage Doors</h2>

        <p>
          Explore a selection of professionally
          installed garage doors completed for
          homeowners across Ottawa.
        </p>

      </div>

      <div className="installations-grid">

        {installations.map((door, index) => (

          <div
            className="installation-card"
            key={index}
          >

            <img
              src={door.image}
               alt="Completed Garage Door Installation"
            />

          </div>

        ))}

      </div>

    </section>

  );
}

export default CompletedInstallations;