
const Process = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/vidéo/bg.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo HTML5.
      </video>

      {/* 🧱 Overlay sombre pour améliorer la lisibilité du texte (optionnel) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* 🧱 Contenu principal */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Notre <span className="text-[#e30613]">Processus</span>
        </h2>
        <p className="text-xl text-center text-white mb-16 max-w-3xl mx-auto">
          Une méthode éprouvée en 5 étapes pour garantir votre succès
        </p>

        {/* 🎬 Vidéo du processus (à la place de l'image) */}
        <div className="flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-w-4xl w-full h-auto rounded-lg shadow-lg"
          >
            <source src="/vidéo/processus.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Process;

