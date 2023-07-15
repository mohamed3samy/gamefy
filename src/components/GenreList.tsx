import { Link } from 'react-router-dom';
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	VStack,
	useColorMode,
} from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = ({ onClose }: { onClose: () => void }) => {
	const { colorMode } = useColorMode();
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<VStack alignItems="start" height="100%">
			<Heading fontSize="2xl" marginTop={9} marginBottom={3}>
				Genres
			</Heading>
			<List overflowY="scroll" height="100%" className="scrollbar">
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								src={getCroppedImageUrl(
									genre.image_background
								)}
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
							/>
							<Button
								onClick={() => {
									setSelectedGenreId(genre.id);
									onClose();
								}}
								whiteSpace="normal"
								textAlign="left"
								fontWeight={
									genre.id === selectedGenreId
										? 'bold'
										: 'normal'
								}
								fontSize={{ base: 'md', md: 'lg' }}
								variant="link"
								color={
									colorMode === 'light'
										? 'gray.600'
										: 'gray.50'
								}
							>
								<Link to="/">{genre.name}</Link>
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</VStack>
	);
};

export default GenreList;
