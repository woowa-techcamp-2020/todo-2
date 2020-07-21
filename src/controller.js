const {
  fetchColumn,
  fetchCard,
  updateColumnTitle,
  updateCardTitle,
  createCard,
  deleteCard,
} = require('./model')

exports.getAllColumnsController = async (req, res, next) => {
  try {
    const rows = await fetchColumn()
    res.status(200).json(rows)
  } catch (e) {
    console.log(err)
    res.status(404).json()
  }
}

exports.getAllCardsController = async (req, res, next) => {
  try {
    const rows = await fetchCard()
    res.status(200).json(rows)
  } catch (e) {
    console.log(err)
    res.status(404).json()
  }
}

exports.updateColumnNameController = async (req, res, next) => {
  try {
    const { title, id } = req.body
    const rows = await updateColumnTitle(title, id)
    res.status(200).json(rows)
  } catch (e) {
    console.log(err)
    res.status(404).json()
  }
}

exports.updateCardNameController = async (req, res, next) => {
  try {
    const { title, id } = req.body
    const rows = await updateCardTitle(title, id)
    res.status(200).json(rows)
  } catch (e) {
    console.log(err)
    res.status(404).json()
  }
}

exports.deleteCardController = async (req, res, next) => {
  try {
    const { id } = req.body
    const rows = await deleteCard(id)
    res.status(200).json(rows)
  } catch (e) {
    console.log(err)
    res.status(404).json()
  }
}

exports.createCardController = async (req, res, next) => {
  // 유저 유효성 검사 : return 401

  try {
    const result = await createCard(req.body)
    const newCardId = result[0].insertId

    res.status(200).json({
      id: newCardId,
    })
  } catch (err) {
    console.log(err)
    res.status(404).json()
  }
}
