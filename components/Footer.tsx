

export default  function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 grid grid-cols-4 gap-6">
      <div>
        <h2 className="font-bold">About Clino </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit maiores temporibus nesciunt culpa ducimus labore consequatur quaerat ea quas voluptatibus, deserunt quo ullam exercitationem corporis? Facere deleniti tempore quidem magni.</p>
        <p>&copy; 2023 Clino. All rights reserved.</p>
       
        <p>Connecting talents with top jobs.</p>
      </div>
      <div>
        <h2 className="font-bold">Jobs by Employment</h2>
        <ul>
          <li>Full-time</li>
          <li>Part-time</li>
          <li>Contract</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Jobs by Location</h2>
        <ul>
          <li>Accra</li>
          <li>Kumasi</li>
          <li>Tamale</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Jobs by Setup</h2>
        <ul>
          <li>Remote</li>
          <li>Hybrid</li>
          <li>Onsite</li>
        </ul>
      </div>
    </footer>
  );
}

