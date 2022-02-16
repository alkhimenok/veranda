const getItemFromDatabase = key => {
	return JSON.parse(localStorage.getItem(key)) || []
}

const addToDatabase = (key, value) => {
	const data = [...getItemFromDatabase(key)]

	const isContains = data.filter(item => {
		return (
			item.img === value.img &&
			item.text === value.text &&
			item.price === value.price
		)
	})[0]

	if (isContains) {
		isContains.count = isContains.count + 1
	} else {
		data.push(value)
	}

	localStorage.setItem(key, JSON.stringify(data))
}

const deleteFromDatabase = (key, id) => {
	const data = getItemFromDatabase(key)
	const res = data.filter(({ itemId }) => id === itemId)

	localStorage.setItem(key, JSON.stringify(res))
}

const clearDatabase = () => {
	localStorage.clear()
}

export { getItemFromDatabase, addToDatabase, deleteFromDatabase, clearDatabase }
