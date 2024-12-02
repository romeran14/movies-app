import { View, Text, useWindowDimensions, Image } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interfaces'
import Carousel, { ICarouselInstance, IComputedDirectionTypes } from 'react-native-reanimated-carousel';

interface Props {
  
  movies:Movie[]
}

const MainSlideShow = ({movies}:Props) => {

    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width

  return (
    <View>
        <Image width={100} height={100} source={{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"}}></Image>
      <Carousel 
      
        ref={ref} 
        data={movies} 
        width={200}
        height={350}
        defaultIndex={1}

        
        style={{width:width, height:350, justifyContent:'center', alignItems:'center', }}
        renderItem={
          ({item})=>
            <MoviePoster id={item.id} poster={item.poster}/>
              
       
      }>
      </Carousel>
    </View>
  )
}

export default MainSlideShow

import { Extrapolate, interpolate } from "react-native-reanimated";
import MoviePoster from './movies/MoviePoster';



interface TBaseConfig {
  size: number
  vertical: boolean
}

export interface ILayoutConfig {
  /**
     * control prev/next item offset.
     * @default 100
     */
  parallaxScrollingOffset?: number
  /**
     * control prev/current/next item offset.
     * @default 0.8
     */
  parallaxScrollingScale?: number

  parallaxAdjacentItemScale?: number
}

export type TParallaxModeProps = IComputedDirectionTypes<{
  /**
     * Carousel Animated transitions.
     */
  mode?: "parallax"
  modeConfig?: ILayoutConfig
}>;

export function parallaxLayout(
  baseConfig: TBaseConfig,
  modeConfig: ILayoutConfig = {},
) {
  const { size, vertical } = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
  } = modeConfig;

  return (value: number) => {
    "worklet";
    const translate = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset],
    );

    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [0, size, 0],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        vertical
          ? {
            translateY: translate,
          }
          : {
            translateX: translate,
          },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}
