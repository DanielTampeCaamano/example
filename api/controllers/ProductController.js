const Product = require('../models/Product');

// Obtener todos los documentos
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        return res.status(400).json({ 'error': error })
    }
};

// Agregar un producto
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send({ 'error': error });
    }
};

// Obtener un documento en específico
const getProductById = async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findOne({ _id });
        return res.json(product);
    } catch (error) {
        return res.status(400).json({ 'error': error })
    }
};

// Actualizar una producto
const updateProduct = async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(_id, req.body);
        res.json(product);
    } catch (error) {
        return res.status(400).json({ 'error': error })
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findByIdAndDelete({ _id });
        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }
        res.json(product);
    } catch (error) {
        return res.status(400).json({ 'error': error })
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};