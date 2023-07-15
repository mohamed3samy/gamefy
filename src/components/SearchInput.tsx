import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../store';

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const setSearchText = useGameQueryStore((s) => s.setSearchText);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
					navigate('/');
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					placeholder="Search games ..."
					variant="filled"
					borderRadius={20}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
