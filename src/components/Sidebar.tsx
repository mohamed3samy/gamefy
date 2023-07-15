import { Link } from 'react-router-dom';
import {
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerBody,
	DrawerContent,
	Image,
	Flex,
} from '@chakra-ui/react';

import { GenreList } from './';
import logo from '../assets/logo.webp';

interface Props {
	onClose: () => void;
	isOpen: boolean;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent>
					<Flex
						justifyContent="space-between"
						alignItems="center"
					>
						<DrawerCloseButton fontSize={16} />
						<Link to="/" style={{ padding: '3px 0 0 10px' }}>
							<Image
								src={logo}
								alt="logo"
								boxSize="50px"
								objectFit="cover"
							/>
						</Link>
					</Flex>
					<DrawerBody>
						<GenreList onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default Sidebar;
