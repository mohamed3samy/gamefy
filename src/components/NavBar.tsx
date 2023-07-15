import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	HStack,
	Image,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';

import { SearchInput, ColorModeSwitch, Sidebar } from './';
import logo from '../assets/logo.webp';

const NavBar = () => {
	const [isLargerThan768] = useMediaQuery('(min-width: 992px)');
	const [isSidebarOpen, setIsSideberOpen] = useState(false);
	const { colorMode } = useColorMode();

	const toggleSidebar = () =>
		setIsSideberOpen((prevSidebarOpen) => !prevSidebarOpen);

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
			<HStack
				paddingX={{ base: '15px', lg: '30px' }}
				paddingY="10px"
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				position="fixed"
				zIndex={1000}
				bg={colorMode === 'light' ? 'white' : 'gray.800'}
				boxShadow="sm"
			>
				{isLargerThan768 ? (
					<Link to="/">
						<Image
							src={logo}
							alt="logo"
							boxSize="60px"
							objectFit="cover"
						/>
					</Link>
				) : (
					<HiMenu
						fontSize="35px"
						cursor="pointer"
						onClick={toggleSidebar}
					/>
				)}
				<SearchInput />
				<ColorModeSwitch />
			</HStack>
		</>
	);
};

export default NavBar;
