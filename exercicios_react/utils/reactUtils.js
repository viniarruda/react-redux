import React from 'react'

function childrenWithProps(children, props) {

	return React.Children.map(props.children, 
			child => React.cloneElement(child, {...props}))

	// /\ Transforma um array de componentes, em um array de componentes com os elementos filhos
}

export { childrenWithProps }