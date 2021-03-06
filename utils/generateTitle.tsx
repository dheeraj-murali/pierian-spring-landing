import { Text } from '@chakra-ui/react';
import React from 'react';
import { v4 } from 'uuid';

export const generateTitle = (title: Title) => {
	const { text } = title;

	const blueHighlight = (
		<Text key={v4()} as='span' color='brandBlue.500'>
			{' '}
			{title.highlightBlue}
		</Text>
	);
	const greenHighlight = (
		<Text key={v4()} as='span' color='brandGreen.500'>
			{' '}
			{title.highlightGreen}
		</Text>
	);

	const textArray = text.split(' ');

	return textArray.map((word) => {
		if (word === title.highlightBlue) return blueHighlight;
		if (word === title.highlightGreen) return greenHighlight;
		return ` ${word}`;
	});
};
