import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { NavBar } from '../components';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Box paddingX={{ base: 0, md: 5 }} paddingY={20}>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
