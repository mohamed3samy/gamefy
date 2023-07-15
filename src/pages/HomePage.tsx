import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react';

import {
	GameGrid,
	GameHeading,
	GenreList,
	PlatformSelector,
	SortSelector,
} from '../components';

const HomePage = () => {
	return (
		<Grid
			templateAreas={{ base: 'main', lg: `"aside main"` }}
			templateColumns={{ base: '1fr', lg: '250px 1fr' }}
		>
			<Show above="lg">
				<GridItem
					area="aside"
					paddingX={5}
					height="90%"
					position="fixed"
					paddingBottom={5}
				>
					<GenreList
						onClose={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading />
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector />
						</Box>
						<SortSelector />
					</Flex>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
