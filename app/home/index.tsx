import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '@/presentation/components/MainSlideShow'

const HomeScreen = () => {

	const { nowPlayingQuery } = useMovies()

    const safeArea = useSafeAreaInsets()

	if (nowPlayingQuery.isLoading ) {
        return(
          <View className='flex-1 items-center justify-center'>
            <ActivityIndicator size={30} color="purple" />
          </View>
        )

	}

	return (
		<View className='flex-1 mt-2' style={{ paddingTop:safeArea.top}}>
			<Text className='font-bold px-4 mb-2 text-3xl'>HomeApp</Text>
            <MainSlideShow movies={nowPlayingQuery.data ?? []}/>
		</View>
	)
}

export default HomeScreen
