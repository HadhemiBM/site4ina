export default function Video(): React.ReactNode {
  return (
    <div >
      <video height="500" width="900" controls>
        <source src="https://res.cloudinary.com/dyrh4zwb1/video/upload/v1729172225/pitch_rb3vam.mp4" />
        Your browser does not support the video tag...
      </video>
    </div>
  );
}

  