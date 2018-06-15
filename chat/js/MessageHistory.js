'use strict';

const MessageHistory = function ({list}) {
	if (!list.length) {
		return null;
	}

	let listOfMsgs = list.map(mes => {
		let message = {text: mes.text,  time: mes.time};
		if (mes.text == undefined) mes.text = '';
		switch (mes.type) {
			case 'message': return <Message key={mes.id} from={mes.from} message={message} />;
				break;
			
			case 'response': return <Response key={mes.id} from={mes.from} message={message} />;
				break;
			
			case 'typing': return <Typing key={mes.id} from={mes.from} message={message} />;
				break;
		}
	});

	return (
		<ul>
			{listOfMsgs}
		</ul>
	);
}

MessageHistory.defaultProps = {
	list: []
};