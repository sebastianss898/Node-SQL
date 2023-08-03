import { getConection, sql, queries } from "../database/index";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllProducts);
    console.log(result);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const agregate = async (req, res) => {
  const { name, description } = req.body;
  let { quantiti } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "bad reques. please fill all fields " });
  }

  if (quantiti == null) quantiti = 0;

  try {
    const pool = await getConection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantiti", sql.Int, quantiti)
      .query(queries.addProducts);
    res.json({ name, description, quantiti });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.getProductsByid);

  res.send(result.recordset[0]);
};

export const deleteProductsById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.deleteProductsById);

  res.sendStatus(204);
};

export const totalProducts = async (req, res) => {
  const pool = await getConection();
  const result = await pool.request().query(queries.totalProducts);
  console.log(result);

  res.json(result.recordset);
  res.sendStatus(204);
};

export const updateProductsById = async (req, res) => {
  const { name, description, quantiti } = req.body;
  const { id } = req.params;
  if (name == null || description == null || quantiti == null) {
    return res.status(400).json({ msg: "bad reques. please fill all fields " });
  }

  const pool = await getConection();
  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantiti", sql.Int, quantiti)
    .input("id", sql.Int, id)
    .query(queries.updateProductsById);

    res.json({name, description, quantiti})
};
