const Hero = () => {
  return (
    <section className="bg-gray-100 flex justify-between items-center px-10 py-20">
      <div className="max-w-xl space-y-6">
        <p className="text-gray-500 text-sm font-medium uppercase">Welcome to Greenshop</p>
        <h1 className="text-6xl font-extrabold leading-tight text-gray-800">
          LET'S LIVE IN A<br />BETTER<br />
          <span className="text-green-600">PLANET</span>
        </h1>
        <p className="text-gray-600 text-base max-w-md">
          We are an online plant shop offering a wide range of cheap and trendy plants.
          Use our plants to create an unique Urban Jungle. Order your favorite plants!
        </p>
      </div>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
        alt="Plant"
        className="max-w-md w-full h-auto object-contain"
      />
    </section>
  );
};

export default Hero;
