import { Link } from 'react-router-dom';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import { CriticScore, Emoji, PlatformIconList } from './';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	console.log(game);
	return (
		<Link to={'/games/' + game.slug}>
			<Card>
				<Image src={getCroppedImageUrl(game.background_image)} />
				<CardBody>
					<HStack
						justifyContent="space-between"
						marginBottom={3}
					>
						<PlatformIconList
							platforms={game.parent_platforms?.map(
								(p) => p.platform
							)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading
						fontSize="2xl"
						textOverflow="ellipsis"
						whiteSpace="nowrap"
						overflow="hidden"
					>
						{game.name}
						<Emoji rating={game.rating_top} />
					</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
