import { View, Text, Pressable, Image } from 'react-native'
interface Props{
    poster:string;
    id:number;
    smallPoster?:boolean;
    className?:string;
}

const MoviePoster = ({ id, poster, smallPoster }:Props) => {

    //https://image.tmdb.org/t/pw500/dpskAcm71w5v8zQ8RmPmJiP31Om.jpg
    const uri = poster.split('pw500')
    const newUri = uri[0] + '/p/w500' + uri[1]

  return (
    <Pressable className='active:opacity-90 px-2'>
      <Image source={{ uri:newUri}}
      //resizeMode='cover'
       className='shadow-lg rounded-2xl w-full h-full' 
       style={{ width: smallPoster ? 85 : 150, height: smallPoster ? 130 : 250,}}/>
    </Pressable>
  )
}

export default MoviePoster