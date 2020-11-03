import { Text } from '@chakra-ui/core';
import React from 'react';

export const generateTitle = (title: HeroTitle) => {
	const { text } = title;

	const blueHighlight = (
		<Text as='span' color='brandBlue.400'>
			{' '}
			{title.highlightBlue}
		</Text>
	);
	const greenHighlight = (
		<Text as='span' color='brandGreen.400'>
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
