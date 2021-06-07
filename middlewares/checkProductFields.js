const checkProductFields = (req, res, next) => {
    const { product_name, product_description, product_price } = req.body
    if (product_name === '') {
        return res.status(400).json({ error: 'El campo Nombre es requerido.' })
    } else if (product_description === '') {
        return res.status(400).json({ error: 'El campo Descripción es requerido.' })
    } else if (product_price <= 0) {
        return res.status(400).json({ error: 'El campo Precio debe ser mayor a 0.' })
    }
    next();
}
module.exports = checkProductFields