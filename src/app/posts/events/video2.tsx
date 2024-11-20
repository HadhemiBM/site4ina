export default function Video2(): React.ReactNode {
  return (
    <div >
      <video height="300" width="600" controls>
        <source src="https://res.cloudinary.com/dyrh4zwb1/video/upload/v1730284010/Projets_Agritech__la_startup__4INTECHNOLOGIE_._lvanma.mp4" />
        Your browser does not support the video tag...
      </video>
    </div>
  );
}