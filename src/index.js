import _ from 'lodash'

function component(){
	const element = document.createElement('div')


	//lodash
	element.innerHTML = _.join(['hello','webpack'],' ')

	return element
}

document.body.appendChild(component())