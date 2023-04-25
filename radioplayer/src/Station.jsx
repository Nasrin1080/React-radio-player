export default function Station(props) {
  const { station } = props;

  return (
      <div className="flex p-4 m-4 rounded-2xl" style= 
       {{backgroundColor:`#${station.color}`}} >
          <img src={station.image} className="w-40"/>
     

          <div className="flex flex-col p-2 m-2">
          <div><p className="text-sm p-3 text-white">{station.tagline}</p></div>
          <audio className="w-80 m-2"controls src={station.liveaudio.url} 
           type="audio/mpeg"  />
          </div>
          
        
         </div>
  )
}