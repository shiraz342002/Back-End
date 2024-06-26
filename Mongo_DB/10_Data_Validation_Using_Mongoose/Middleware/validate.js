const validate = (schema, key) => (req, res, next) => {
    const error = new schema(req[key]).validateSync();
    if (error) {
        res.status(400).send(error);
    } else {
        next();
    }
};
export default validate;