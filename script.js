const { body } = document;

const changeBgColor = (num) => {
	console.log(num);
	switch (num) {
		case 1:
			body.className !== 'color_1'
				? (body.className = 'color_1')
				: (body.className = '');
			break;
		case 2:
            body.className !== 'color_2'
            ? (body.className = 'color_2')
            : (body.className = '');
			break;
		case 3:
			body.className !== 'color_3'
				? (body.className = 'color_3')
				: (body.className = '');
			break;
	}
};
