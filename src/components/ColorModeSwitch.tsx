import { Switch, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Switch
			colorScheme="green"
			size={{ base: 'md', md: 'lg' }}
			isChecked={colorMode === 'dark'}
			onChange={toggleColorMode}
		/>
	);
};

export default ColorModeSwitch;
