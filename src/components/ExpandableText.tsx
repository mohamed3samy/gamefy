import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded
		? children
		: children.substring(0, limit) + '...';

	return (
		<Text fontSize={{ base: 'md', md: 'lg' }} marginTop={3}>
			{summary}
			<Button
				onClick={() => setExpanded(!expanded)}
				size={{ base: 'xs', md: 'sm' }}
				fontWeight="bold"
				colorScheme="yellow"
				marginLeft={1}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
