import React, { useState } from 'react'
import { Button } from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom'

const Todo = () => {
	const [item, setItem] = useState('')
	const [newItem, setNewItem] = useState([])

	const itemEvent = (event) => {
		setItem(event.target.value)
	}

	const listItem = () => {
		setNewItem((prevalue) => {
			return [...prevalue, item]
		})
		setItem('')
	}
	return (
		<>
		<div className='main_div'>
			<div className='center_div'>
				<br />
				<h1>ToDo List</h1>
				<br />
				<input type="text" 
				value={item}
				placeholder='Add an item' 
				onChange={ itemEvent }
				/>
				<Button className='newBtn' onClick={listItem}> <AddIcon /> </ Button>
				<br />
				<ol>
					{newItem.map((val, index) => {
										return <ListCom key={index} text={val} />
										})}
				</ol>
				<br />
			</div>
		</div>
		</>
		)
}


export default Todo;