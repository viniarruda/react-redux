import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family lastName='Souza' >
		<Member name='Vinicius' />
		<Member name='Berry' />
		<Member name='Feijao' />
	</Family>
	, document.getElementById('app')
)